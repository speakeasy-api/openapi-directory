# uploads

## Overview

General data upload endpoints.

### Available Operations

* [chunkedUpload](#chunkedupload) - Chunked upload of data
* [fetchUploadStatusById](#fetchuploadstatusbyid) - Retrieve Upload status
* [fetchUploadStatuses](#fetchuploadstatuses) - Retrieve Upload statuses in batch
* [postUpload](#postupload) - Initiate a new upload

## chunkedUpload

Send chunked data for an **Upload**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChunkedUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChunkedUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChunkedUploadRequest();
    $request->contentRange = 'esse';
    $request->contentType = 'recusandae';
    $request->uploadId = '0bc7178e-4796-4f2a-b0c6-88282aa48256';

    $requestSecurity = new ChunkedUploadSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->uploads->chunkedUpload($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUploadStatusById

Check the status of an **Upload** by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUploadStatusByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUploadStatusByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUploadStatusByIdRequest();
    $request->uploadId = '2f222e98-17ee-417c-be61-e6b7b95bc0ab';

    $requestSecurity = new FetchUploadStatusByIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->uploads->fetchUploadStatusById($request, $requestSecurity);

    if ($response->uploadStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUploadStatuses

Check the status of multiple **Uploads** (up to 100 per request).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UploadStatusQuery;
use \OpenAPI\OpenAPI\Models\Operations\FetchUploadStatusesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadStatusQuery();
    $request->ids = [
        'c20c4f37-89fd-4871-b99d-d2efd121aa6f',
    ];

    $requestSecurity = new FetchUploadStatusesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->uploads->fetchUploadStatuses($request, $requestSecurity);

    if ($response->uploadStatuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpload

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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\Upload;
use \OpenAPI\OpenAPI\Models\Shared\UploadContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUploadRequest();
    $request->upload = new Upload();
    $request->upload->contentType = UploadContentTypeEnum::IMAGE_VND_CLIMATE_NDVI_GEOTIFF;
    $request->upload->length = 936747;
    $request->upload->md5 = 'vel';
    $request->upload->metadata = [
        'eius' => 'libero',
        'illum' => 'soluta',
    ];
    $request->xRecipientEmail = 'accusantium';

    $requestSecurity = new PostUploadSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->uploads->postUpload($request, $requestSecurity);

    if ($response->createdUpload !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
