# Uploads

## Overview

General data upload endpoints.

### Available Operations

* [ChunkedUpload](#chunkedupload) - Chunked upload of data
* [FetchUploadStatusByID](#fetchuploadstatusbyid) - Retrieve Upload status
* [FetchUploadStatuses](#fetchuploadstatuses) - Retrieve Upload statuses in batch
* [PostUpload](#postupload) - Initiate a new upload

## ChunkedUpload

Send chunked data for an **Upload**.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Uploads.ChunkedUpload(ctx, operations.ChunkedUploadRequest{
        ContentRange: "esse",
        ContentType: "recusandae",
        UploadID: "0bc7178e-4796-4f2a-b0c6-88282aa48256",
    }, operations.ChunkedUploadSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchUploadStatusByID

Check the status of an **Upload** by ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Uploads.FetchUploadStatusByID(ctx, operations.FetchUploadStatusByIDRequest{
        UploadID: "2f222e98-17ee-417c-be61-e6b7b95bc0ab",
    }, operations.FetchUploadStatusByIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadStatus != nil {
        // handle response
    }
}
```

## FetchUploadStatuses

Check the status of multiple **Uploads** (up to 100 per request).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Uploads.FetchUploadStatuses(ctx, shared.UploadStatusQuery{
        Ids: []string{
            "c20c4f37-89fd-4871-b99d-d2efd121aa6f",
        },
    }, operations.FetchUploadStatusesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadStatuses != nil {
        // handle response
    }
}
```

## PostUpload

Step one in uploading a data product. The method will return an **Upload** ID which the caller will use in subsequent `PUT` requests.
The following `contentTypes` may be uploaded:
    <details><summary>__image/vnd.climate.thermal.geotiff__</summary>

    Allows for the upload of a thermal image. The image is a single band geotiff with 64 bit signed floating point values in degrees Celsius. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.

    The following metadata entries are required to be embedded in the geotiff:
      * acquisitionStartDate - ISO8601 date
      * acquisitionEndDate - ISO8601 date
      * isCalibrated - boolean

    The following metadata entries are optional:
      * sourceId - uuid referencing the asset in the partner's system
      * fieldId - uuid referencing a field in the Climate system
      * boundaryId - uuid referencing a boundary in the Climate system
      * brandId - uuid referencing a partner's branding in the Climate system
      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.

    Requires either imagery:write or platform scope.
  </details>
  <details><summary>__image/vnd.climate.ndvi.geotiff__</summary>

    Allows for the upload of a NDVI image. The image is a single band geotiff with 64 bit signed floating point values in the range of -1 to 1 inclusive. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.

    The following metadata entries are required to be embedded in the geotiff:
      * acquisitionStartDate - ISO8601 date
      * acquisitionEndDate - ISO8601 date

    The following metadata entries are optional:
      * sourceId - uuid referencing the asset in the partner's system
      * fieldId - uuid referencing a field in the Climate system
      * boundaryId - uuid referencing a boundary in the Climate system
      * brandId - uuid referencing a partner's branding in the Climate system
      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.

    Requires either imagery:write or platform scope.
  </details>
  <details><summary> __image/vnd.climate.rgb.geotiff__</summary>

    Allows for the upload of a true color image. The image is a multi band geotiff with 24-bit composite values. Each band is 8 bits with values in the range of 0 to 255. The Coordinate Reference System (CRS) must be UTM with WGS84 datum. The geotiff must contain 3 bands in the order Red, Green, Blue.

    The following metadata entries are required to be embedded in the geotiff:
      * acquisitionStartDate - ISO8601 date
      * acquisitionEndDate - ISO8601 date
      * isCalibrated - boolean

    The following metadata entries are optional:
      * sourceId - uuid referencing the asset in the partner's system
      * fieldId - uuid referencing a field in the Climate system
      * boundaryId - uuid referencing a boundary in the Climate system
      * brandId - uuid referencing a partner's branding in the Climate system
      * reflectanceComputeMethod - either TOA or GROUND
      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.

    Requires either imagery:write or platform scope.
  </details>
  <details><summary> __image/vnd.climate.rgb-nir.geotiff__</summary>

    Allows for the upload of a Near Infrared (NIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.

    The following metadata entries are required to be embedded in the geotiff:
      * acquisitionStartDate - ISO8601 date
      * acquisitionEndDate - ISO8601 date
      * isCalibrated - boolean

    The following metadata entries are optional:
      * sourceId - uuid referencing the asset in the partner's system
      * fieldId - uuid referencing a field in the Climate system
      * boundaryId - uuid referencing a boundary in the Climate system
      * brandId - uuid referencing a partner's branding in the Climate system
      * reflectanceComputeMethod - either TOA or GROUND
      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.

    Requires either imagery:write or platform scope.
  </details>
  <details><summary>__image/vnd.climate.rgb-cir.geotiff__</summary>

    Allows for the upload of a Color Infrared (CIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.

    The following metadata entries are required to be embedded in the geotiff:
      * acquisitionStartDate - ISO8601 date
      * acquisitionEndDate - ISO8601 date
      * isCalibrated - boolean

    The following metadata entries are optional:
      * sourceId - uuid referencing the asset in the partner's system
      * fieldId - uuid referencing a field in the Climate system
      * boundaryId - uuid referencing a boundary in the Climate system
      * brandId - uuid referencing a partner's branding in the Climate system
      * reflectanceComputeMethod - either TOA or GROUND
      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.

    Requires either imagery:write or platform scope.
  </details>
  <details><summary> __application/vnd.climate.rx.planting.shp__</summary>

    Allows for the upload of a planting prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:
      * .shp
      * .shx
      * .dbf

    All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.

    Requires either rx:write or platform scope.
  </details>
  <details><summary> __application/vnd.climate.prescription.zones.shp__</summary>

    Allows for the upload of a zones prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:
      * .shp
      * .shx
      * .dbf

    All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.

    The following metadata entries are required:
      * fieldId - field identifier for prescription zones.
    
    Requires either rxZones:write or platform scope.
  </details>
  <details><summary> __application/vnd.climate.modus.xml__</summary>

    Allows for the upload of a soil sampling file in the modus 1.0 format with some restrictions.  The upload must be a single xml file.

    The following elements are required to be present in the modus file.
      * EventCode - Max length of 64 bytes
      * EventDate - Must be in ISO8601
      * SoilSample - Has a maxOccurs of 20k
      * Depth - Has a maxOccurs of 50
      * LabName - Must be non-empty.
      * StartingDepth - 0 to 36 inclusive, default 0
      * EndingDepth - 1 - 36 inclusive, default 1
      * ColumnDepth
      * DepthUnit - must be inches
      * Geometry - point in wgs84
    
    Requires the soil:write scope.
   </details>
   <details><summary> __application/vnd.climate.stand-count.geojson__</summary>

    Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).

    Each feature in the collection must contain the following entry in its properties section:
      * StandPPA - A count of the number of plants per acre:

    Additionally, the type field of each feature's geometry field must be:
      * Point

    Requires `imagery:write` scope.
   </details>
   <details><summary> __application/vnd.climate.weed-count.geojson__</summary>

    Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).

    Each feature in the collection must contain the following entry in its properties section:
      * StandPPA - A count of the number of plants per acre:

    Additionally, the type field of each feature's geometry field must be:
      * Point

    Requires `imagery:write` scope.
   </details>
   <details><summary> __application/vnd.climate.as-applied.zip__</summary>

    Allows for the upload of a valid application data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).

    The following metadata entries are required:
      * fileName - name of the file being uploaded.

    The following metadata entries are optional:
      * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.

    Requires `asApplied:write` scope.
   </details>
   <details><summary> __application/vnd.climate.as-planted.zip__</summary>

    Allows for the upload of a valid planting data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).

    The following metadata entries are required:
      * fileName - name of the file being uploaded.

    The following metadata entries are optional:
      * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.

    Requires `asPlanted:write` scope.
   </details>
   <details><summary> __application/vnd.climate.as-harvested.zip__</summary>

    Allows for the upload of a valid harvest data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).

    The following metadata entries are required:
      * fileName - name of the file being uploaded.

    The following metadata entries are optional:
      * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.

    Requires `asHarvested:write` scope.
   </details>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Uploads.PostUpload(ctx, operations.PostUploadRequest{
        Upload: &shared.Upload{
            ContentType: shared.UploadContentTypeEnumImageVndClimateNdviGeotiff,
            Length: 936747,
            Md5: "vel",
            Metadata: map[string]interface{}{
                "eius": "libero",
                "illum": "soluta",
            },
        },
        XRecipientEmail: sdk.String("accusantium"),
    }, operations.PostUploadSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatedUpload != nil {
        // handle response
    }
}
```
