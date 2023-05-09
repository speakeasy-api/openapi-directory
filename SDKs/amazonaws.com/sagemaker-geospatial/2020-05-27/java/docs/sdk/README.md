# SDK

## Overview

Provides APIs for creating and managing SageMaker geospatial resources.

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker-geospatial/>
### Available Operations

* [deleteEarthObservationJob](#deleteearthobservationjob) - Use this operation to delete an Earth Observation job.
* [deleteVectorEnrichmentJob](#deletevectorenrichmentjob) - Use this operation to delete a Vector Enrichment job.
* [exportEarthObservationJob](#exportearthobservationjob) - Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.
* [exportVectorEnrichmentJob](#exportvectorenrichmentjob) - Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.
* [getEarthObservationJob](#getearthobservationjob) - Get the details for a previously initiated Earth Observation job.
* [getRasterDataCollection](#getrasterdatacollection) - Use this operation to get details of a specific raster data collection.
* [getTile](#gettile) - Gets a web mercator tile for the given Earth Observation job.
* [getVectorEnrichmentJob](#getvectorenrichmentjob) - Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
* [listEarthObservationJobs](#listearthobservationjobs) - Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
* [listRasterDataCollections](#listrasterdatacollections) - Use this operation to get raster data collections.
* [listTagsForResource](#listtagsforresource) - Lists the tags attached to the resource.
* [listVectorEnrichmentJobs](#listvectorenrichmentjobs) - Retrieves a list of vector enrichment jobs.
* [searchRasterDataCollection](#searchrasterdatacollection) - Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
* [startEarthObservationJob](#startearthobservationjob) - Use this operation to create an Earth observation job.
* [startVectorEnrichmentJob](#startvectorenrichmentjob) - Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
* [stopEarthObservationJob](#stopearthobservationjob) - Use this operation to stop an existing earth observation job.
* [stopVectorEnrichmentJob](#stopvectorenrichmentjob) - Stops the Vector Enrichment job for a given job ARN.
* [tagResource](#tagresource) - The resource you want to tag.
* [untagResource](#untagresource) - The resource you want to untag.

## deleteEarthObservationJob

Use this operation to delete an Earth Observation job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEarthObservationJobRequest;
import org.openapis.openapi.models.operations.DeleteEarthObservationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEarthObservationJobRequest req = new DeleteEarthObservationJobRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            DeleteEarthObservationJobResponse res = sdk.sdk.deleteEarthObservationJob(req);

            if (res.deleteEarthObservationJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVectorEnrichmentJob

Use this operation to delete a Vector Enrichment job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVectorEnrichmentJobRequest;
import org.openapis.openapi.models.operations.DeleteVectorEnrichmentJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVectorEnrichmentJobRequest req = new DeleteVectorEnrichmentJobRequest("molestiae") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            DeleteVectorEnrichmentJobResponse res = sdk.sdk.deleteVectorEnrichmentJob(req);

            if (res.deleteVectorEnrichmentJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportEarthObservationJob

Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportEarthObservationJobRequest;
import org.openapis.openapi.models.operations.ExportEarthObservationJobRequestBody;
import org.openapis.openapi.models.operations.ExportEarthObservationJobRequestBodyOutputConfig;
import org.openapis.openapi.models.operations.ExportEarthObservationJobResponse;
import org.openapis.openapi.models.shared.ExportS3DataInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportEarthObservationJobRequest req = new ExportEarthObservationJobRequest(                new ExportEarthObservationJobRequestBody("ab", "quis",                 new ExportEarthObservationJobRequestBodyOutputConfig() {{
                                                s3Data = new ExportS3DataInput("veritatis") {{
                                                    kmsKeyId = "deserunt";
                                                }};;
                                            }};) {{
                                clientToken = "perferendis";
                                exportSourceImages = false;
                            }};) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            ExportEarthObservationJobResponse res = sdk.sdk.exportEarthObservationJob(req);

            if (res.exportEarthObservationJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportVectorEnrichmentJob

Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportVectorEnrichmentJobRequest;
import org.openapis.openapi.models.operations.ExportVectorEnrichmentJobRequestBody;
import org.openapis.openapi.models.operations.ExportVectorEnrichmentJobRequestBodyOutputConfig;
import org.openapis.openapi.models.operations.ExportVectorEnrichmentJobResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VectorEnrichmentJobS3Data;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportVectorEnrichmentJobRequest req = new ExportVectorEnrichmentJobRequest(                new ExportVectorEnrichmentJobRequestBody("molestiae", "quod",                 new ExportVectorEnrichmentJobRequestBodyOutputConfig() {{
                                                s3Data = new VectorEnrichmentJobS3Data("quod") {{
                                                    kmsKeyId = "esse";
                                                }};;
                                            }};) {{
                                clientToken = "totam";
                            }};) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "dicta";
                xAmzDate = "nam";
                xAmzSecurityToken = "officia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "fugit";
            }};            

            ExportVectorEnrichmentJobResponse res = sdk.sdk.exportVectorEnrichmentJob(req);

            if (res.exportVectorEnrichmentJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEarthObservationJob

Get the details for a previously initiated Earth Observation job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEarthObservationJobRequest;
import org.openapis.openapi.models.operations.GetEarthObservationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEarthObservationJobRequest req = new GetEarthObservationJobRequest("hic") {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            GetEarthObservationJobResponse res = sdk.sdk.getEarthObservationJob(req);

            if (res.getEarthObservationJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRasterDataCollection

Use this operation to get details of a specific raster data collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRasterDataCollectionRequest;
import org.openapis.openapi.models.operations.GetRasterDataCollectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRasterDataCollectionRequest req = new GetRasterDataCollectionRequest("cum") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            GetRasterDataCollectionResponse res = sdk.sdk.getRasterDataCollection(req);

            if (res.getRasterDataCollectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTile

Gets a web mercator tile for the given Earth Observation job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTileOutputDataTypeEnum;
import org.openapis.openapi.models.operations.GetTileRequest;
import org.openapis.openapi.models.operations.GetTileResponse;
import org.openapis.openapi.models.operations.GetTileTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTileRequest req = new GetTileRequest("iste",                 new String[]{{
                                add("natus"),
                            }}, GetTileTargetEnum.INPUT, 943749L, 902599L, 681820L) {{
                executionRoleArn = "in";
                imageMask = false;
                outputDataType = GetTileOutputDataTypeEnum.FLOAT32;
                outputFormat = "iste";
                propertyFilters = "iure";
                timeRangeFilter = "saepe";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "ipsa";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "est";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "laborum";
            }};            

            GetTileResponse res = sdk.sdk.getTile(req);

            if (res.getTileOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVectorEnrichmentJob

Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVectorEnrichmentJobRequest;
import org.openapis.openapi.models.operations.GetVectorEnrichmentJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVectorEnrichmentJobRequest req = new GetVectorEnrichmentJobRequest("dolorem") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
            }};            

            GetVectorEnrichmentJobResponse res = sdk.sdk.getVectorEnrichmentJob(req);

            if (res.getVectorEnrichmentJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEarthObservationJobs

Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEarthObservationJobsRequest;
import org.openapis.openapi.models.operations.ListEarthObservationJobsRequestBody;
import org.openapis.openapi.models.operations.ListEarthObservationJobsRequestBodySortOrderEnum;
import org.openapis.openapi.models.operations.ListEarthObservationJobsRequestBodyStatusEqualsEnum;
import org.openapis.openapi.models.operations.ListEarthObservationJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEarthObservationJobsRequest req = new ListEarthObservationJobsRequest(                new ListEarthObservationJobsRequestBody() {{
                                maxResults = 38425L;
                                nextToken = "iure";
                                sortBy = "culpa";
                                sortOrder = ListEarthObservationJobsRequestBodySortOrderEnum.DESCENDING;
                                statusEquals = ListEarthObservationJobsRequestBodyStatusEqualsEnum.DELETED;
                            }};) {{
                maxResults = "architecto";
                nextToken = "mollitia";
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellat";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
            }};            

            ListEarthObservationJobsResponse res = sdk.sdk.listEarthObservationJobs(req);

            if (res.listEarthObservationJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRasterDataCollections

Use this operation to get raster data collections.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRasterDataCollectionsRequest;
import org.openapis.openapi.models.operations.ListRasterDataCollectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRasterDataCollectionsRequest req = new ListRasterDataCollectionsRequest() {{
                maxResults = 466311L;
                nextToken = "molestiae";
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "error";
                xAmzCredential = "quia";
                xAmzDate = "quis";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "animi";
            }};            

            ListRasterDataCollectionsResponse res = sdk.sdk.listRasterDataCollections(req);

            if (res.listRasterDataCollectionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags attached to the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("odit") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVectorEnrichmentJobs

Retrieves a list of vector enrichment jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVectorEnrichmentJobsRequest;
import org.openapis.openapi.models.operations.ListVectorEnrichmentJobsRequestBody;
import org.openapis.openapi.models.operations.ListVectorEnrichmentJobsRequestBodySortOrderEnum;
import org.openapis.openapi.models.operations.ListVectorEnrichmentJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVectorEnrichmentJobsRequest req = new ListVectorEnrichmentJobsRequest(                new ListVectorEnrichmentJobsRequestBody() {{
                                maxResults = 622846L;
                                nextToken = "temporibus";
                                sortBy = "laborum";
                                sortOrder = ListVectorEnrichmentJobsRequestBodySortOrderEnum.ASCENDING;
                                statusEquals = "reiciendis";
                            }};) {{
                maxResults = "voluptatibus";
                nextToken = "vero";
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            ListVectorEnrichmentJobsResponse res = sdk.sdk.listVectorEnrichmentJobs(req);

            if (res.listVectorEnrichmentJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchRasterDataCollection

Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchRasterDataCollectionRequest;
import org.openapis.openapi.models.operations.SearchRasterDataCollectionRequestBody;
import org.openapis.openapi.models.operations.SearchRasterDataCollectionRequestBodyRasterDataCollectionQuery;
import org.openapis.openapi.models.operations.SearchRasterDataCollectionResponse;
import org.openapis.openapi.models.shared.AreaOfInterest;
import org.openapis.openapi.models.shared.AreaOfInterestGeometry;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.EoCloudCoverInput;
import org.openapis.openapi.models.shared.LandsatCloudCoverLandInput;
import org.openapis.openapi.models.shared.LogicalOperatorEnum;
import org.openapis.openapi.models.shared.MultiPolygonGeometryInput;
import org.openapis.openapi.models.shared.PlatformInput;
import org.openapis.openapi.models.shared.PolygonGeometryInput;
import org.openapis.openapi.models.shared.Property;
import org.openapis.openapi.models.shared.PropertyFilter;
import org.openapis.openapi.models.shared.PropertyFilters;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeRangeFilterInput;
import org.openapis.openapi.models.shared.ViewOffNadirInput;
import org.openapis.openapi.models.shared.ViewSunAzimuthInput;
import org.openapis.openapi.models.shared.ViewSunElevationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchRasterDataCollectionRequest req = new SearchRasterDataCollectionRequest(                new SearchRasterDataCollectionRequestBody("doloremque",                 new SearchRasterDataCollectionRequestBodyRasterDataCollectionQuery() {{
                                                areaOfInterest = new AreaOfInterest() {{
                                                    areaOfInterestGeometry = new AreaOfInterestGeometry() {{
                                                        multiPolygonGeometry = new MultiPolygonGeometryInput(                new Double[][][][]{{
                                                                            add(new Double[][][]{{
                                                                                add(new Double[][]{{
                                                                                    add(new Double[]{{
                                                                                        add(3594.44),
                                                                                    }}),
                                                                                    add(new Double[]{{
                                                                                        add(4808.94),
                                                                                        add(1187.27),
                                                                                    }}),
                                                                                    add(new Double[]{{
                                                                                        add(3179.83),
                                                                                        add(8804.76),
                                                                                        add(4142.63),
                                                                                    }}),
                                                                                    add(new Double[]{{
                                                                                        add(641.47),
                                                                                        add(2168.22),
                                                                                        add(6924.72),
                                                                                        add(5651.89),
                                                                                    }}),
                                                                                }}),
                                                                                add(new Double[][]{{
                                                                                    add(new Double[]{{
                                                                                        add(2653.89),
                                                                                        add(5089.69),
                                                                                        add(5232.48),
                                                                                        add(9167.23),
                                                                                    }}),
                                                                                    add(new Double[]{{
                                                                                        add(9211.58),
                                                                                    }}),
                                                                                    add(new Double[]{{
                                                                                        add(831.12),
                                                                                        add(9292.97),
                                                                                        add(2777.18),
                                                                                    }}),
                                                                                }}),
                                                                            }}),
                                                                            add(new Double[][][]{{
                                                                                add(new Double[][]{{
                                                                                    add(new Double[]{{
                                                                                        add(8423.42),
                                                                                        add(1317.97),
                                                                                        add(6471.74),
                                                                                    }}),
                                                                                }}),
                                                                                add(new Double[][]{{
                                                                                    add(new Double[]{{
                                                                                        add(2894.06),
                                                                                        add(2647.3),
                                                                                        add(1831.91),
                                                                                        add(3978.21),
                                                                                    }}),
                                                                                    add(new Double[]{{
                                                                                        add(5528.22),
                                                                                        add(201.07),
                                                                                        add(1649.4),
                                                                                    }}),
                                                                                    add(new Double[]{{
                                                                                        add(3698.08),
                                                                                        add(46.95),
                                                                                        add(1464.41),
                                                                                        add(6778.17),
                                                                                    }}),
                                                                                }}),
                                                                            }}),
                                                                        }});;
                                                        polygonGeometry = new PolygonGeometryInput(                new Double[][][]{{
                                                                            add(new Double[][]{{
                                                                                add(new Double[]{{
                                                                                    add(7351.94),
                                                                                    add(2884.76),
                                                                                    add(9621.89),
                                                                                }}),
                                                                                add(new Double[]{{
                                                                                    add(2487.53),
                                                                                    add(7561.07),
                                                                                }}),
                                                                            }}),
                                                                            add(new Double[][]{{
                                                                                add(new Double[]{{
                                                                                    add(5920.42),
                                                                                    add(8960.39),
                                                                                }}),
                                                                                add(new Double[]{{
                                                                                    add(6389.21),
                                                                                    add(2230.81),
                                                                                    add(8915.55),
                                                                                }}),
                                                                                add(new Double[]{{
                                                                                    add(6800.56),
                                                                                    add(4471.25),
                                                                                    add(4491.98),
                                                                                    add(8464.09),
                                                                                }}),
                                                                            }}),
                                                                            add(new Double[][]{{
                                                                                add(new Double[]{{
                                                                                    add(1162.02),
                                                                                    add(2974.37),
                                                                                    add(7670.24),
                                                                                }}),
                                                                                add(new Double[]{{
                                                                                    add(4118.2),
                                                                                    add(3965.06),
                                                                                    add(6754.39),
                                                                                    add(8811.04),
                                                                                }}),
                                                                                add(new Double[]{{
                                                                                    add(5812.73),
                                                                                }}),
                                                                                add(new Double[]{{
                                                                                    add(8817.36),
                                                                                    add(9654.17),
                                                                                }}),
                                                                            }}),
                                                                        }});;
                                                    }};;
                                                }};;
                                                bandFilter = new String[]{{
                                                    add("provident"),
                                                    add("nam"),
                                                    add("id"),
                                                }};
                                                propertyFilters = new PropertyFilters() {{
                                                    logicalOperator = LogicalOperatorEnum.AND;
                                                    properties = new org.openapis.openapi.models.shared.PropertyFilter[]{{
                                                        add(new PropertyFilter(                new Property() {{
                                                                            eoCloudCover = new EoCloudCoverInput(2982.82, 923.73);;
                                                                            landsatCloudCoverLand = new LandsatCloudCoverLandInput(5699.65, 3540.47);;
                                                                            platform = new PlatformInput("provident") {{
                                                                                comparisonOperator = ComparisonOperatorEnum.NOT_EQUALS;
                                                                            }};;
                                                                            viewOffNadir = new ViewOffNadirInput(5743.25, 336.25);;
                                                                            viewSunAzimuth = new ViewSunAzimuthInput(6532.01, 9689.62);;
                                                                            viewSunElevation = new ViewSunElevationInput(6521.03, 3209.97);;
                                                                        }};) {{
                                                            property = new Property() {{
                                                                eoCloudCover = new EoCloudCoverInput(2305.33, 6439.9) {{
                                                                    lowerBound = 5332.06;
                                                                    upperBound = 9560.84;
                                                                }};
                                                                landsatCloudCoverLand = new LandsatCloudCoverLandInput(6188.09, 6063.93) {{
                                                                    lowerBound = 3948.69;
                                                                    upperBound = 4238.55;
                                                                }};
                                                                platform = new PlatformInput("nihil") {{
                                                                    comparisonOperator = ComparisonOperatorEnum.NOT_EQUALS;
                                                                    value = "perferendis";
                                                                }};
                                                                viewOffNadir = new ViewOffNadirInput(6601.74, 2879.91) {{
                                                                    lowerBound = 3015.75;
                                                                    upperBound = 7160.75;
                                                                }};
                                                                viewSunAzimuth = new ViewSunAzimuthInput(6180.16, 7491.7) {{
                                                                    lowerBound = 2900.77;
                                                                    upperBound = 3834.62;
                                                                }};
                                                                viewSunElevation = new ViewSunElevationInput(1354.74, 1028.63) {{
                                                                    lowerBound = 4287.69;
                                                                    upperBound = 8784.53;
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new PropertyFilter(                new Property() {{
                                                                            eoCloudCover = new EoCloudCoverInput(9046.48, 8681.26);;
                                                                            landsatCloudCoverLand = new LandsatCloudCoverLandInput(375.59, 1624.93);;
                                                                            platform = new PlatformInput("praesentium") {{
                                                                                comparisonOperator = ComparisonOperatorEnum.NOT_EQUALS;
                                                                            }};;
                                                                            viewOffNadir = new ViewOffNadirInput(1668.47, 1238.2);;
                                                                            viewSunAzimuth = new ViewSunAzimuthInput(7790.51, 8480.09);;
                                                                            viewSunElevation = new ViewSunElevationInput(8649.34, 8073.19);;
                                                                        }};) {{
                                                            property = new Property() {{
                                                                eoCloudCover = new EoCloudCoverInput(8965.47, 1412.64) {{
                                                                    lowerBound = 4314.18;
                                                                    upperBound = 2212.62;
                                                                }};
                                                                landsatCloudCoverLand = new LandsatCloudCoverLandInput(4358.65, 9840.43) {{
                                                                    lowerBound = 3675.62;
                                                                    upperBound = 972.6;
                                                                }};
                                                                platform = new PlatformInput("maxime") {{
                                                                    comparisonOperator = ComparisonOperatorEnum.STARTS_WITH;
                                                                    value = "eius";
                                                                }};
                                                                viewOffNadir = new ViewOffNadirInput(4479.26, 1002.26) {{
                                                                    lowerBound = 5370.23;
                                                                    upperBound = 7038.89;
                                                                }};
                                                                viewSunAzimuth = new ViewSunAzimuthInput(3523.12, 7142.42) {{
                                                                    lowerBound = 995.69;
                                                                    upperBound = 9194.83;
                                                                }};
                                                                viewSunElevation = new ViewSunElevationInput(8411.4, 1494.48) {{
                                                                    lowerBound = 4692.49;
                                                                    upperBound = 9988.48;
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new PropertyFilter(                new Property() {{
                                                                            eoCloudCover = new EoCloudCoverInput(7299.91, 7499.99);;
                                                                            landsatCloudCoverLand = new LandsatCloudCoverLandInput(1716.29, 3394.04);;
                                                                            platform = new PlatformInput("totam") {{
                                                                                comparisonOperator = ComparisonOperatorEnum.NOT_EQUALS;
                                                                            }};;
                                                                            viewOffNadir = new ViewOffNadirInput(543.38, 3389.85);;
                                                                            viewSunAzimuth = new ViewSunAzimuthInput(1999.96, 1794.9);;
                                                                            viewSunElevation = new ViewSunElevationInput(185.21, 1709.86);;
                                                                        }};) {{
                                                            property = new Property() {{
                                                                eoCloudCover = new EoCloudCoverInput(1399.72, 4071.83) {{
                                                                    lowerBound = 4113.97;
                                                                    upperBound = 5691.01;
                                                                }};
                                                                landsatCloudCoverLand = new LandsatCloudCoverLandInput(9825.75, 6974.29) {{
                                                                    lowerBound = 332.22;
                                                                    upperBound = 691.67;
                                                                }};
                                                                platform = new PlatformInput("autem") {{
                                                                    comparisonOperator = ComparisonOperatorEnum.NOT_EQUALS;
                                                                    value = "voluptate";
                                                                }};
                                                                viewOffNadir = new ViewOffNadirInput(8663.83, 3654.96) {{
                                                                    lowerBound = 7220.56;
                                                                    upperBound = 505.88;
                                                                }};
                                                                viewSunAzimuth = new ViewSunAzimuthInput(8558.04, 2307.42) {{
                                                                    lowerBound = 9755.22;
                                                                    upperBound = 166.27;
                                                                }};
                                                                viewSunElevation = new ViewSunElevationInput(3599.78, 9441.24) {{
                                                                    lowerBound = 117.14;
                                                                    upperBound = 7649.12;
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }};;
                                                timeRangeFilter = new TimeRangeFilterInput(OffsetDateTime.parse("2021-08-11T12:30:29.509Z"), OffsetDateTime.parse("2022-02-15T18:44:26.943Z"));;
                                            }};) {{
                                nextToken = "nostrum";
                            }};) {{
                nextToken = "hic";
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "facilis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "consequuntur";
            }};            

            SearchRasterDataCollectionResponse res = sdk.sdk.searchRasterDataCollection(req);

            if (res.searchRasterDataCollectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startEarthObservationJob

Use this operation to create an Earth observation job.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartEarthObservationJobRequest;
import org.openapis.openapi.models.operations.StartEarthObservationJobRequestBody;
import org.openapis.openapi.models.operations.StartEarthObservationJobRequestBodyInputConfig;
import org.openapis.openapi.models.operations.StartEarthObservationJobRequestBodyJobConfig;
import org.openapis.openapi.models.operations.StartEarthObservationJobResponse;
import org.openapis.openapi.models.shared.AlgorithmNameCloudRemovalEnum;
import org.openapis.openapi.models.shared.AlgorithmNameGeoMosaicEnum;
import org.openapis.openapi.models.shared.AlgorithmNameResamplingEnum;
import org.openapis.openapi.models.shared.AreaOfInterest;
import org.openapis.openapi.models.shared.AreaOfInterestGeometry;
import org.openapis.openapi.models.shared.BandMathConfigInput;
import org.openapis.openapi.models.shared.CloudRemovalConfigInput;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.CustomIndicesInput;
import org.openapis.openapi.models.shared.EoCloudCoverInput;
import org.openapis.openapi.models.shared.EojDataSourceConfigInput;
import org.openapis.openapi.models.shared.GeoMosaicConfigInput;
import org.openapis.openapi.models.shared.GroupByEnum;
import org.openapis.openapi.models.shared.LandsatCloudCoverLandInput;
import org.openapis.openapi.models.shared.LogicalOperatorEnum;
import org.openapis.openapi.models.shared.MetadataProviderEnum;
import org.openapis.openapi.models.shared.MultiPolygonGeometryInput;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OutputResolutionResamplingInput;
import org.openapis.openapi.models.shared.OutputResolutionStackInput;
import org.openapis.openapi.models.shared.OutputTypeEnum;
import org.openapis.openapi.models.shared.PlatformInput;
import org.openapis.openapi.models.shared.PolygonGeometryInput;
import org.openapis.openapi.models.shared.PredefinedResolutionEnum;
import org.openapis.openapi.models.shared.Property;
import org.openapis.openapi.models.shared.PropertyFilter;
import org.openapis.openapi.models.shared.PropertyFilters;
import org.openapis.openapi.models.shared.RasterDataCollectionQueryInput;
import org.openapis.openapi.models.shared.ResamplingConfigInput;
import org.openapis.openapi.models.shared.S3DataInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackConfigInput;
import org.openapis.openapi.models.shared.TemporalStatisticsConfigInput;
import org.openapis.openapi.models.shared.TemporalStatisticsEnum;
import org.openapis.openapi.models.shared.TimeRangeFilterInput;
import org.openapis.openapi.models.shared.UnitEnum;
import org.openapis.openapi.models.shared.UserDefined;
import org.openapis.openapi.models.shared.ViewOffNadirInput;
import org.openapis.openapi.models.shared.ViewSunAzimuthInput;
import org.openapis.openapi.models.shared.ViewSunElevationInput;
import org.openapis.openapi.models.shared.ZonalStatisticsConfigInput;
import org.openapis.openapi.models.shared.ZonalStatisticsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartEarthObservationJobRequest req = new StartEarthObservationJobRequest(                new StartEarthObservationJobRequestBody(                new StartEarthObservationJobRequestBodyInputConfig() {{
                                                dataSourceConfig = new EojDataSourceConfigInput() {{
                                                    s3Data = new S3DataInput(MetadataProviderEnum.PLANET_ORDER, "error") {{
                                                        kmsKeyId = "eaque";
                                                    }};;
                                                }};;
                                                previousEarthObservationJobArn = "occaecati";
                                                rasterDataCollectionQuery = new RasterDataCollectionQueryInput("rerum",                 new TimeRangeFilterInput(OffsetDateTime.parse("2022-01-03T18:36:27.259Z"), OffsetDateTime.parse("2022-03-14T08:20:25.450Z"));) {{
                                                    areaOfInterest = new AreaOfInterest() {{
                                                        areaOfInterestGeometry = new AreaOfInterestGeometry() {{
                                                            multiPolygonGeometry = new MultiPolygonGeometryInput(                new Double[][][][]{{
                                                                                add(new Double[][][]{{
                                                                                    add(new Double[][]{{
                                                                                        add(new Double[]{{
                                                                                            add(5899.1),
                                                                                            add(7508.44),
                                                                                            add(7301.22),
                                                                                            add(9644.9),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(5542.42),
                                                                                            add(3982.21),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(2098.43),
                                                                                        }}),
                                                                                    }}),
                                                                                    add(new Double[][]{{
                                                                                        add(new Double[]{{
                                                                                            add(2187.49),
                                                                                        }}),
                                                                                    }}),
                                                                                    add(new Double[][]{{
                                                                                        add(new Double[]{{
                                                                                            add(7395.51),
                                                                                            add(4521.09),
                                                                                            add(4904.59),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(2274.14),
                                                                                            add(6805.45),
                                                                                            add(2543.56),
                                                                                            add(852.95),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(564.18),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(4878.38),
                                                                                            add(3117.96),
                                                                                        }}),
                                                                                    }}),
                                                                                }}),
                                                                                add(new Double[][][]{{
                                                                                    add(new Double[][]{{
                                                                                        add(new Double[]{{
                                                                                            add(3777.52),
                                                                                            add(6176.58),
                                                                                            add(1796.03),
                                                                                            add(5424.99),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(8546.14),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(7438.35),
                                                                                        }}),
                                                                                    }}),
                                                                                    add(new Double[][]{{
                                                                                        add(new Double[]{{
                                                                                            add(4536.97),
                                                                                            add(6770.82),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(6070.45),
                                                                                            add(8966.72),
                                                                                            add(7146.97),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(4694.97),
                                                                                            add(2168.97),
                                                                                            add(4560.15),
                                                                                            add(6630.78),
                                                                                        }}),
                                                                                    }}),
                                                                                    add(new Double[][]{{
                                                                                        add(new Double[]{{
                                                                                            add(1372.2),
                                                                                            add(206.51),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(7583.79),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(3200.17),
                                                                                            add(9044.25),
                                                                                            add(3834.64),
                                                                                            add(6457.85),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(3246.83),
                                                                                            add(8310.49),
                                                                                            add(5197.11),
                                                                                        }}),
                                                                                    }}),
                                                                                    add(new Double[][]{{
                                                                                        add(new Double[]{{
                                                                                            add(8726.51),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(2735.42),
                                                                                            add(4254.51),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(8853.38),
                                                                                            add(1856.36),
                                                                                            add(6798.8),
                                                                                            add(9527.92),
                                                                                        }}),
                                                                                    }}),
                                                                                }}),
                                                                                add(new Double[][][]{{
                                                                                    add(new Double[][]{{
                                                                                        add(new Double[]{{
                                                                                            add(2155.07),
                                                                                            add(7887.4),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(2294.42),
                                                                                            add(7308.56),
                                                                                            add(8802.98),
                                                                                            add(2539.41),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(2133.12),
                                                                                            add(9574.51),
                                                                                        }}),
                                                                                    }}),
                                                                                    add(new Double[][]{{
                                                                                        add(new Double[]{{
                                                                                            add(256.62),
                                                                                            add(7115.84),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(1536.94),
                                                                                        }}),
                                                                                        add(new Double[]{{
                                                                                            add(7304.42),
                                                                                            add(3741.7),
                                                                                        }}),
                                                                                    }}),
                                                                                }}),
                                                                            }});;
                                                            polygonGeometry = new PolygonGeometryInput(                new Double[][][]{{
                                                                                add(new Double[][]{{
                                                                                    add(new Double[]{{
                                                                                        add(2776.28),
                                                                                    }}),
                                                                                    add(new Double[]{{
                                                                                        add(5867.84),
                                                                                    }}),
                                                                                }}),
                                                                                add(new Double[][]{{
                                                                                    add(new Double[]{{
                                                                                        add(7470.8),
                                                                                        add(1175.31),
                                                                                        add(6748.48),
                                                                                        add(5173.79),
                                                                                    }}),
                                                                                    add(new Double[]{{
                                                                                        add(1320.68),
                                                                                        add(1749.09),
                                                                                    }}),
                                                                                    add(new Double[]{{
                                                                                        add(7044.74),
                                                                                        add(3960.6),
                                                                                        add(4631.5),
                                                                                    }}),
                                                                                    add(new Double[]{{
                                                                                        add(8404.29),
                                                                                        add(1832.8),
                                                                                        add(2048.65),
                                                                                    }}),
                                                                                }}),
                                                                                add(new Double[][]{{
                                                                                    add(new Double[]{{
                                                                                        add(4880.56),
                                                                                    }}),
                                                                                }}),
                                                                            }});;
                                                        }};;
                                                    }};;
                                                    propertyFilters = new PropertyFilters() {{
                                                        logicalOperator = LogicalOperatorEnum.AND;
                                                        properties = new org.openapis.openapi.models.shared.PropertyFilter[]{{
                                                            add(new PropertyFilter(                new Property() {{
                                                                                eoCloudCover = new EoCloudCoverInput(630.38, 164.29);;
                                                                                landsatCloudCoverLand = new LandsatCloudCoverLandInput(5556.49, 9295.3);;
                                                                                platform = new PlatformInput("consequatur") {{
                                                                                    comparisonOperator = ComparisonOperatorEnum.STARTS_WITH;
                                                                                }};;
                                                                                viewOffNadir = new ViewOffNadirInput(8330.38, 7851.53);;
                                                                                viewSunAzimuth = new ViewSunAzimuthInput(9843.3, 2817.3);;
                                                                                viewSunElevation = new ViewSunElevationInput(7034.95, 5864.1);;
                                                                            }};) {{
                                                                property = new Property() {{
                                                                    eoCloudCover = new EoCloudCoverInput(9404.32, 304.52) {{
                                                                        lowerBound = 3556.13;
                                                                        upperBound = 7220.81;
                                                                    }};
                                                                    landsatCloudCoverLand = new LandsatCloudCoverLandInput(7486.64, 925.96) {{
                                                                        lowerBound = 7653.26;
                                                                        upperBound = 7469.94;
                                                                    }};
                                                                    platform = new PlatformInput("veritatis") {{
                                                                        comparisonOperator = ComparisonOperatorEnum.STARTS_WITH;
                                                                        value = "ipsum";
                                                                    }};
                                                                    viewOffNadir = new ViewOffNadirInput(7316.94, 5844.76) {{
                                                                        lowerBound = 7492.55;
                                                                        upperBound = 5521.93;
                                                                    }};
                                                                    viewSunAzimuth = new ViewSunAzimuthInput(2091.57, 2921.47) {{
                                                                        lowerBound = 456.14;
                                                                        upperBound = 9619.37;
                                                                    }};
                                                                    viewSunElevation = new ViewSunElevationInput(6772.63, 1002.94) {{
                                                                        lowerBound = 2869.15;
                                                                        upperBound = 2408.29;
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};;
                                                }};;
                                            }};,                 new StartEarthObservationJobRequestBodyJobConfig() {{
                                                bandMathConfig = new BandMathConfigInput() {{
                                                    customIndices = new CustomIndicesInput() {{
                                                        operations = new org.openapis.openapi.models.shared.Operation[]{{
                                                            add(new Operation("omnis", "quis") {{
                                                                equation = "quae";
                                                                name = "Darren McClure";
                                                                outputType = OutputTypeEnum.UINT16;
                                                            }}),
                                                        }};
                                                    }};;
                                                    predefinedIndices = new String[]{{
                                                        add("delectus"),
                                                    }};
                                                }};;
                                                cloudMaskingConfig = new java.util.HashMap<String, Object>() {{
                                                    put("consectetur", "vero");
                                                    put("tenetur", "dignissimos");
                                                }};
                                                cloudRemovalConfig = new CloudRemovalConfigInput() {{
                                                    algorithmName = AlgorithmNameCloudRemovalEnum.INTERPOLATION;
                                                    interpolationValue = "hic";
                                                    targetBands = new String[]{{
                                                        add("quod"),
                                                        add("odio"),
                                                        add("similique"),
                                                    }};
                                                }};;
                                                geoMosaicConfig = new GeoMosaicConfigInput() {{
                                                    algorithmName = AlgorithmNameGeoMosaicEnum.MIN;
                                                    targetBands = new String[]{{
                                                        add("ducimus"),
                                                        add("dolore"),
                                                        add("quibusdam"),
                                                        add("illum"),
                                                    }};
                                                }};;
                                                landCoverSegmentationConfig = new java.util.HashMap<String, Object>() {{
                                                    put("natus", "impedit");
                                                }};
                                                resamplingConfig = new ResamplingConfigInput(                new OutputResolutionResamplingInput(                new UserDefined(UnitEnum.METERS, 132.36););) {{
                                                    algorithmName = AlgorithmNameResamplingEnum.SUM;
                                                    targetBands = new String[]{{
                                                        add("nulla"),
                                                        add("fugit"),
                                                    }};
                                                }};;
                                                stackConfig = new StackConfigInput() {{
                                                    outputResolution = new OutputResolutionStackInput() {{
                                                        predefined = PredefinedResolutionEnum.AVERAGE;
                                                        userDefined = new UserDefined(UnitEnum.METERS, 9818.3);;
                                                    }};;
                                                    targetBands = new String[]{{
                                                        add("iusto"),
                                                        add("eligendi"),
                                                        add("ducimus"),
                                                        add("alias"),
                                                    }};
                                                }};;
                                                temporalStatisticsConfig = new TemporalStatisticsConfigInput(                new org.openapis.openapi.models.shared.TemporalStatisticsEnum[]{{
                                                                    add(TemporalStatisticsEnum.MEAN),
                                                                    add(TemporalStatisticsEnum.MEDIAN),
                                                                    add(TemporalStatisticsEnum.MEDIAN),
                                                                }}) {{
                                                    groupBy = GroupByEnum.ALL;
                                                    targetBands = new String[]{{
                                                        add("possimus"),
                                                        add("magnam"),
                                                    }};
                                                }};;
                                                zonalStatisticsConfig = new ZonalStatisticsConfigInput(                new org.openapis.openapi.models.shared.ZonalStatisticsEnum[]{{
                                                                    add(ZonalStatisticsEnum.STANDARD_DEVIATION),
                                                                }}, "laudantium") {{
                                                    targetBands = new String[]{{
                                                        add("dolor"),
                                                    }};
                                                    zoneS3PathKmsKeyId = "maiores";
                                                }};;
                                            }};, "quasi") {{
                                clientToken = "ex";
                                executionRoleArn = "nulla";
                                kmsKeyId = "excepturi";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("nostrum", "sapiente");
                                    put("quisquam", "saepe");
                                    put("ea", "impedit");
                                    put("corporis", "veniam");
                                }};
                            }};) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "magnam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quo";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "recusandae";
            }};            

            StartEarthObservationJobResponse res = sdk.sdk.startEarthObservationJob(req);

            if (res.startEarthObservationJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startVectorEnrichmentJob

Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartVectorEnrichmentJobRequest;
import org.openapis.openapi.models.operations.StartVectorEnrichmentJobRequestBody;
import org.openapis.openapi.models.operations.StartVectorEnrichmentJobRequestBodyInputConfig;
import org.openapis.openapi.models.operations.StartVectorEnrichmentJobRequestBodyJobConfig;
import org.openapis.openapi.models.operations.StartVectorEnrichmentJobResponse;
import org.openapis.openapi.models.shared.MapMatchingConfig;
import org.openapis.openapi.models.shared.ReverseGeocodingConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VectorEnrichmentJobDataSourceConfigInput;
import org.openapis.openapi.models.shared.VectorEnrichmentJobDocumentTypeEnum;
import org.openapis.openapi.models.shared.VectorEnrichmentJobS3Data;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartVectorEnrichmentJobRequest req = new StartVectorEnrichmentJobRequest(                new StartVectorEnrichmentJobRequestBody("minima",                 new StartVectorEnrichmentJobRequestBodyInputConfig() {{
                                                dataSourceConfig = new VectorEnrichmentJobDataSourceConfigInput() {{
                                                    s3Data = new VectorEnrichmentJobS3Data("eaque") {{
                                                        kmsKeyId = "a";
                                                    }};;
                                                }};;
                                                documentType = VectorEnrichmentJobDocumentTypeEnum.CSV;
                                            }};,                 new StartVectorEnrichmentJobRequestBodyJobConfig() {{
                                                mapMatchingConfig = new MapMatchingConfig("libero", "aut", "aut", "deleniti");;
                                                reverseGeocodingConfig = new ReverseGeocodingConfig("impedit", "aliquam");;
                                            }};, "fugit") {{
                                clientToken = "accusamus";
                                kmsKeyId = "inventore";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("et", "dolorum");
                                    put("laborum", "placeat");
                                }};
                            }};) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "eum";
                xAmzCredential = "autem";
                xAmzDate = "nobis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "nulla";
            }};            

            StartVectorEnrichmentJobResponse res = sdk.sdk.startVectorEnrichmentJob(req);

            if (res.startVectorEnrichmentJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopEarthObservationJob

Use this operation to stop an existing earth observation job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopEarthObservationJobRequest;
import org.openapis.openapi.models.operations.StopEarthObservationJobRequestBody;
import org.openapis.openapi.models.operations.StopEarthObservationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopEarthObservationJobRequest req = new StopEarthObservationJobRequest(                new StopEarthObservationJobRequestBody("libero");) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "numquam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "provident";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "molestiae";
            }};            

            StopEarthObservationJobResponse res = sdk.sdk.stopEarthObservationJob(req);

            if (res.stopEarthObservationJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopVectorEnrichmentJob

Stops the Vector Enrichment job for a given job ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopVectorEnrichmentJobRequest;
import org.openapis.openapi.models.operations.StopVectorEnrichmentJobRequestBody;
import org.openapis.openapi.models.operations.StopVectorEnrichmentJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopVectorEnrichmentJobRequest req = new StopVectorEnrichmentJobRequest(                new StopVectorEnrichmentJobRequestBody("odio");) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "esse";
                xAmzCredential = "esse";
                xAmzDate = "rem";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "quidem";
            }};            

            StopVectorEnrichmentJobResponse res = sdk.sdk.stopVectorEnrichmentJob(req);

            if (res.stopVectorEnrichmentJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

The resource you want to tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("eum", "suscipit");
                                                put("assumenda", "eos");
                                            }});, "praesentium") {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "id";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "quo";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

The resource you want to untag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("quo",                 new String[]{{
                                add("eius"),
                                add("eos"),
                                add("voluptas"),
                            }}) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "consequatur";
                xAmzDate = "tempora";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "aspernatur";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
