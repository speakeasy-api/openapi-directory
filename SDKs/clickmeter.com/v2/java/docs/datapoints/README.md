# dataPoints

### Available Operations

* [dataPointsBatchDelete](#datapointsbatchdelete) - Delete multiple datapoints
* [dataPointsBatchPost](#datapointsbatchpost) - Update multiple datapoints
* [dataPointsBatchPut](#datapointsbatchput) - Create multiple datapoints
* [dataPointsCount](#datapointscount) - Count the datapoints associated to the user
* [dataPointsDelete](#datapointsdelete) - Delete a datapoint
* [dataPointsGet](#datapointsget) - List of all the datapoints associated to the user
* [dataPointsGetHits](#datapointsgethits) - Retrieve the list of events related to this datapoint.
* [dataPointsGetStatisticsAggregatedSingle](#datapointsgetstatisticsaggregatedsingle) - Retrieve statistics about this customer for a timeframe by groups
* [dataPointsGetStatisticsAllList](#datapointsgetstatisticsalllist) - Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
* [dataPointsGetStatisticsList](#datapointsgetstatisticslist) - Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
* [dataPointsGetStatisticsSingle](#datapointsgetstatisticssingle) - Retrieve statistics about this datapoint for a timeframe
* [dataPointsPatchFavourite](#datapointspatchfavourite) - Fast switch the "favourite" field of a datapoint
* [dataPointsPatchNotesForm](#datapointspatchnotesform) - Fast patch the "notes" field of a datapoint
* [dataPointsPatchNotesJson](#datapointspatchnotesjson) - Fast patch the "notes" field of a datapoint
* [dataPointsPatchNotesRaw](#datapointspatchnotesraw) - Fast patch the "notes" field of a datapoint
* [dataPointsPost](#datapointspost) - Update a datapoint
* [dataPointsPut](#datapointsput) - Create a datapoint
* [getDatapointsId](#getdatapointsid) - Get a datapoint

## dataPointsBatchDelete

Delete multiple datapoints

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsBatchDeleteResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoEntityUriLong;
import org.openapis.openapi.models.shared.ApiCoreRequestsDeleteBatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreRequestsDeleteBatch req = new ApiCoreRequestsDeleteBatch() {{
                entities = new org.openapis.openapi.models.shared.ApiCoreDtoEntityUriLong[]{{
                    add(new ApiCoreDtoEntityUriLong() {{
                        id = 476477L;
                        uri = "http://likely-dignity.info";
                    }}),
                }};
            }};            

            DataPointsBatchDeleteResponse res = sdk.dataPoints.dataPointsBatchDelete(req);

            if (res.apiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsBatchPost

Update multiple datapoints

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsBatchPostResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsBrowserBaseDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapoint;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointStatusEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecifics;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingPixelSpecifics;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUniqueDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoTagsTag;
import org.openapis.openapi.models.shared.ApiCoreRequestsDatapointsBatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreRequestsDatapointsBatch req = new ApiCoreRequestsDatapointsBatch() {{
                list = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapoint[]{{
                    add(new ApiCoreDtoDatapointsDatapoint() {{
                        creationDate = "20120203120530";
                        encodeIp = false;
                        fifthConversionId = 683282L;
                        fifthConversionName = "reprehenderit";
                        firstConversionId = 695626L;
                        firstConversionName = "fugiat";
                        fourthConversionId = 283519L;
                        fourthConversionName = "eum";
                        groupId = 379927L;
                        groupName = "assumenda";
                        id = 181151L;
                        isPublic = false;
                        isSecured = false;
                        lightTracking = false;
                        name = "Miss Devin Bogan";
                        notes = "neque";
                        preferred = false;
                        redirectOnly = false;
                        secondConversionId = 778696L;
                        secondConversionName = "illum";
                        status = ApiCoreDtoDatapointsDatapointStatusEnum.DELETED;
                        tags = new org.openapis.openapi.models.shared.ApiCoreDtoTagsTag[]{{
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(178367L),
                                    add(373813L),
                                }};
                                groups = new Long[]{{
                                    add(587600L),
                                }};
                                id = 9688L;
                                name = "Henrietta Hilpert";
                            }}),
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(459856L),
                                    add(925164L),
                                    add(44612L),
                                    add(715179L),
                                }};
                                groups = new Long[]{{
                                    add(490819L),
                                    add(76956L),
                                    add(469498L),
                                    add(518835L),
                                }};
                                id = 882710L;
                                name = "Courtney Mayert";
                            }}),
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(645570L),
                                }};
                                groups = new Long[]{{
                                    add(35362L),
                                    add(783648L),
                                }};
                                id = 430402L;
                                name = "Dwayne Cronin";
                            }}),
                        }};
                        thirdConversionId = 681393L;
                        thirdConversionName = "mollitia";
                        title = "Mrs.";
                        trackingCode = "atque";
                        type = ApiCoreDtoDatapointsDatapointTypeEnum.TRACKING_LINK;
                        typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics() {{
                            appendQuery = false;
                            browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem() {{
                                emailDestinationUrl = "minima";
                                mobileDestinationUrl = "nisi";
                                spidersDestinationUrl = "fugit";
                            }};
                            destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum.WEIGHTED_DESTINATION;
                            domainId = 159870;
                            encodeUrl = false;
                            expirationClicks = 187131L;
                            expirationDate = "20120203120530";
                            firstUrl = "explicabo";
                            goDomainId = 903984;
                            hideUrl = false;
                            hideUrlTitle = "occaecati";
                            isABTest = false;
                            password = "atque";
                            pauseAfterClicksExpiration = false;
                            pauseAfterDateExpiration = false;
                            randomDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "esse";
                                }}),
                            }};
                            redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum.TEMPORARY_REDIRECT;
                            referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum.MYSELF;
                            scripts = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo[]{{
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 458604L;
                                    name = "Marco Terry PhD";
                                }}),
                            }};
                            sequentialDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "harum";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "molestiae";
                                }}),
                            }};
                            spilloverDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "occaecati";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "minima";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "distinctio";
                                }}),
                            }};
                            uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem() {{
                                firstDestinationUrl = "eligendi";
                            }};
                            url = "sit";
                            urlAfterClicksExpiration = "culpa";
                            urlAfterDateExpiration = "tempore";
                            urlsByLanguage = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "cumque";
                                    url = "consequuntur";
                                }}),
                            }};
                            urlsByNation = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "minus";
                                    url = "quaerat";
                                }}),
                            }};
                            weightedDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "consectetur";
                                    weight = 458139;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "blanditiis";
                                    weight = 590984;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "a";
                                    weight = 857723;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "quas";
                                    weight = 457223;
                                }}),
                            }};
                        }};
                        typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics() {{
                            parameterNote = "quasi";
                        }};
                        writePermited = false;
                    }}),
                    add(new ApiCoreDtoDatapointsDatapoint() {{
                        creationDate = "20120203120530";
                        encodeIp = false;
                        fifthConversionId = 951875L;
                        fifthConversionName = "error";
                        firstConversionId = 575751L;
                        firstConversionName = "pariatur";
                        fourthConversionId = 820767L;
                        fourthConversionName = "quia";
                        groupId = 908844L;
                        groupName = "asperiores";
                        id = 815524L;
                        isPublic = false;
                        isSecured = false;
                        lightTracking = false;
                        name = "Marilyn Botsford";
                        notes = "aliquid";
                        preferred = false;
                        redirectOnly = false;
                        secondConversionId = 949298L;
                        secondConversionName = "quae";
                        status = ApiCoreDtoDatapointsDatapointStatusEnum.DELETED;
                        tags = new org.openapis.openapi.models.shared.ApiCoreDtoTagsTag[]{{
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(258684L),
                                    add(727697L),
                                }};
                                groups = new Long[]{{
                                    add(742238L),
                                    add(33304L),
                                    add(306986L),
                                    add(958983L),
                                }};
                                id = 119771L;
                                name = "Delores Hermiston IV";
                            }}),
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(845358L),
                                }};
                                groups = new Long[]{{
                                    add(536275L),
                                    add(929292L),
                                }};
                                id = 680270L;
                                name = "Dr. Belinda West III";
                            }}),
                        }};
                        thirdConversionId = 55965L;
                        thirdConversionName = "minima";
                        title = "Mr.";
                        trackingCode = "consectetur";
                        type = ApiCoreDtoDatapointsDatapointTypeEnum.TRACKING_LINK;
                        typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics() {{
                            appendQuery = false;
                            browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem() {{
                                emailDestinationUrl = "iste";
                                mobileDestinationUrl = "temporibus";
                                spidersDestinationUrl = "accusantium";
                            }};
                            destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum.BROWSER_DESTINATION;
                            domainId = 15606;
                            encodeUrl = false;
                            expirationClicks = 513075L;
                            expirationDate = "20120203120530";
                            firstUrl = "eum";
                            goDomainId = 649832;
                            hideUrl = false;
                            hideUrlTitle = "ab";
                            isABTest = false;
                            password = "corrupti";
                            pauseAfterClicksExpiration = false;
                            pauseAfterDateExpiration = false;
                            randomDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "voluptatem";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "dolor";
                                }}),
                            }};
                            redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum.TEMPORARY_REDIRECT;
                            referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum.NONE;
                            scripts = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo[]{{
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 131055L;
                                    name = "Dr. Maria Kulas";
                                }}),
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 244651L;
                                    name = "Ms. Glen Zboncak";
                                }}),
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 162954L;
                                    name = "Luke Schoen";
                                }}),
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 989410L;
                                    name = "Anna Hahn";
                                }}),
                            }};
                            sequentialDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "ab";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "adipisci";
                                }}),
                            }};
                            spilloverDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "id";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "suscipit";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "velit";
                                }}),
                            }};
                            uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem() {{
                                firstDestinationUrl = "culpa";
                            }};
                            url = "est";
                            urlAfterClicksExpiration = "recusandae";
                            urlAfterDateExpiration = "totam";
                            urlsByLanguage = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "vel";
                                    url = "ducimus";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "quos";
                                    url = "vel";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "labore";
                                    url = "possimus";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "facilis";
                                    url = "cum";
                                }}),
                            }};
                            urlsByNation = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "in";
                                    url = "corporis";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "reiciendis";
                                    url = "assumenda";
                                }}),
                            }};
                            weightedDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "recusandae";
                                    weight = 397533;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "aperiam";
                                    weight = 738683;
                                }}),
                            }};
                        }};
                        typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics() {{
                            parameterNote = "consectetur";
                        }};
                        writePermited = false;
                    }}),
                    add(new ApiCoreDtoDatapointsDatapoint() {{
                        creationDate = "20120203120530";
                        encodeIp = false;
                        fifthConversionId = 449083L;
                        fifthConversionName = "exercitationem";
                        firstConversionId = 937285L;
                        firstConversionName = "facere";
                        fourthConversionId = 257233L;
                        fourthConversionName = "doloribus";
                        groupId = 381760L;
                        groupName = "reiciendis";
                        id = 697142L;
                        isPublic = false;
                        isSecured = false;
                        lightTracking = false;
                        name = "Dr. Terence Gulgowski";
                        notes = "non";
                        preferred = false;
                        redirectOnly = false;
                        secondConversionId = 228263L;
                        secondConversionName = "beatae";
                        status = ApiCoreDtoDatapointsDatapointStatusEnum.PAUSED;
                        tags = new org.openapis.openapi.models.shared.ApiCoreDtoTagsTag[]{{
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(233420L),
                                    add(358107L),
                                    add(689768L),
                                    add(385237L),
                                }};
                                groups = new Long[]{{
                                    add(916727L),
                                }};
                                id = 730709L;
                                name = "Sophia Murray";
                            }}),
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(374244L),
                                    add(374296L),
                                }};
                                groups = new Long[]{{
                                    add(748789L),
                                    add(680116L),
                                }};
                                id = 237807L;
                                name = "Ernest Labadie";
                            }}),
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(885963L),
                                    add(839189L),
                                }};
                                groups = new Long[]{{
                                    add(237742L),
                                    add(738391L),
                                }};
                                id = 502389L;
                                name = "Moses Douglas";
                            }}),
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(519643L),
                                    add(940210L),
                                    add(348783L),
                                    add(750765L),
                                }};
                                groups = new Long[]{{
                                    add(699575L),
                                }};
                                id = 148829L;
                                name = "Benjamin Ziemann";
                            }}),
                        }};
                        thirdConversionId = 709072L;
                        thirdConversionName = "ab";
                        title = "Miss";
                        trackingCode = "dolore";
                        type = ApiCoreDtoDatapointsDatapointTypeEnum.TRACKING_PIXEL;
                        typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics() {{
                            appendQuery = false;
                            browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem() {{
                                emailDestinationUrl = "sed";
                                mobileDestinationUrl = "in";
                                spidersDestinationUrl = "commodi";
                            }};
                            destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum.DESTINATION_BY_NATION;
                            domainId = 131289;
                            encodeUrl = false;
                            expirationClicks = 378326L;
                            expirationDate = "20120203120530";
                            firstUrl = "unde";
                            goDomainId = 100032;
                            hideUrl = false;
                            hideUrlTitle = "suscipit";
                            isABTest = false;
                            password = "sapiente";
                            pauseAfterClicksExpiration = false;
                            pauseAfterDateExpiration = false;
                            randomDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "illo";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "reiciendis";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "perferendis";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "corrupti";
                                }}),
                            }};
                            redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum.TEMPORARY_REDIRECT;
                            referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum.NONE;
                            scripts = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo[]{{
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 592231L;
                                    name = "Jana Emard";
                                }}),
                            }};
                            sequentialDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "voluptatibus";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "tempora";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "tempora";
                                }}),
                            }};
                            spilloverDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "reiciendis";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "ex";
                                }}),
                            }};
                            uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem() {{
                                firstDestinationUrl = "sit";
                            }};
                            url = "non";
                            urlAfterClicksExpiration = "officiis";
                            urlAfterDateExpiration = "praesentium";
                            urlsByLanguage = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "quaerat";
                                    url = "incidunt";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "ipsam";
                                    url = "debitis";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "rem";
                                    url = "sit";
                                }}),
                            }};
                            urlsByNation = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "error";
                                    url = "veniam";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "minima";
                                    url = "recusandae";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "reiciendis";
                                    url = "nulla";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "magni";
                                    url = "aperiam";
                                }}),
                            }};
                            weightedDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "numquam";
                                    weight = 329935;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "in";
                                    weight = 889234;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "beatae";
                                    weight = 512452;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "exercitationem";
                                    weight = 510629;
                                }}),
                            }};
                        }};
                        typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics() {{
                            parameterNote = "cum";
                        }};
                        writePermited = false;
                    }}),
                }};
            }};            

            DataPointsBatchPostResponse res = sdk.dataPoints.dataPointsBatchPost(req);

            if (res.apiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsBatchPut

Create multiple datapoints

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsBatchPutResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsBrowserBaseDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapoint;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointStatusEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecifics;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingPixelSpecifics;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUniqueDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoTagsTag;
import org.openapis.openapi.models.shared.ApiCoreRequestsDatapointsBatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreRequestsDatapointsBatch req = new ApiCoreRequestsDatapointsBatch() {{
                list = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapoint[]{{
                    add(new ApiCoreDtoDatapointsDatapoint() {{
                        creationDate = "20120203120530";
                        encodeIp = false;
                        fifthConversionId = 530089L;
                        fifthConversionName = "error";
                        firstConversionId = 944708L;
                        firstConversionName = "expedita";
                        fourthConversionId = 892863L;
                        fourthConversionName = "neque";
                        groupId = 677115L;
                        groupName = "nostrum";
                        id = 639028L;
                        isPublic = false;
                        isSecured = false;
                        lightTracking = false;
                        name = "Byron Thiel";
                        notes = "fugit";
                        preferred = false;
                        redirectOnly = false;
                        secondConversionId = 282699L;
                        secondConversionName = "fugiat";
                        status = ApiCoreDtoDatapointsDatapointStatusEnum.ACTIVE;
                        tags = new org.openapis.openapi.models.shared.ApiCoreDtoTagsTag[]{{
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(299643L),
                                    add(7884L),
                                    add(460220L),
                                }};
                                groups = new Long[]{{
                                    add(24527L),
                                    add(530537L),
                                }};
                                id = 558065L;
                                name = "Zachary Borer";
                            }}),
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(24313L),
                                }};
                                groups = new Long[]{{
                                    add(342611L),
                                    add(906172L),
                                }};
                                id = 622231L;
                                name = "Eva Wisozk";
                            }}),
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(99416L),
                                }};
                                groups = new Long[]{{
                                    add(289776L),
                                    add(695270L),
                                    add(539074L),
                                }};
                                id = 671957L;
                                name = "Mrs. Roman Howell";
                            }}),
                        }};
                        thirdConversionId = 454860L;
                        thirdConversionName = "unde";
                        title = "Dr.";
                        trackingCode = "provident";
                        type = ApiCoreDtoDatapointsDatapointTypeEnum.TRACKING_PIXEL;
                        typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics() {{
                            appendQuery = false;
                            browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem() {{
                                emailDestinationUrl = "delectus";
                                mobileDestinationUrl = "voluptates";
                                spidersDestinationUrl = "perferendis";
                            }};
                            destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum.DESTINATION_BY_NATION;
                            domainId = 696483;
                            encodeUrl = false;
                            expirationClicks = 440666L;
                            expirationDate = "20120203120530";
                            firstUrl = "facere";
                            goDomainId = 685092;
                            hideUrl = false;
                            hideUrlTitle = "praesentium";
                            isABTest = false;
                            password = "mollitia";
                            pauseAfterClicksExpiration = false;
                            pauseAfterDateExpiration = false;
                            randomDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "voluptatem";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "quisquam";
                                }}),
                            }};
                            redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum.TEMPORARY_REDIRECT;
                            referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum.NONE;
                            scripts = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo[]{{
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 442036L;
                                    name = "Jimmie Hoppe";
                                }}),
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 90885L;
                                    name = "Grace Shields";
                                }}),
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 623295L;
                                    name = "Frankie Thompson";
                                }}),
                            }};
                            sequentialDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "ex";
                                }}),
                            }};
                            spilloverDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "corrupti";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "at";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "error";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "blanditiis";
                                }}),
                            }};
                            uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem() {{
                                firstDestinationUrl = "suscipit";
                            }};
                            url = "repudiandae";
                            urlAfterClicksExpiration = "atque";
                            urlAfterDateExpiration = "atque";
                            urlsByLanguage = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "recusandae";
                                    url = "dolorum";
                                }}),
                            }};
                            urlsByNation = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "labore";
                                    url = "reiciendis";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "doloremque";
                                    url = "repudiandae";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "dicta";
                                    url = "accusantium";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "beatae";
                                    url = "dolores";
                                }}),
                            }};
                            weightedDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "laboriosam";
                                    weight = 246535;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "a";
                                    weight = 562783;
                                }}),
                            }};
                        }};
                        typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics() {{
                            parameterNote = "magnam";
                        }};
                        writePermited = false;
                    }}),
                    add(new ApiCoreDtoDatapointsDatapoint() {{
                        creationDate = "20120203120530";
                        encodeIp = false;
                        fifthConversionId = 906355L;
                        fifthConversionName = "consequuntur";
                        firstConversionId = 580107L;
                        firstConversionName = "officiis";
                        fourthConversionId = 597937L;
                        fourthConversionName = "in";
                        groupId = 238043L;
                        groupName = "eveniet";
                        id = 580887L;
                        isPublic = false;
                        isSecured = false;
                        lightTracking = false;
                        name = "Beverly Olson";
                        notes = "error";
                        preferred = false;
                        redirectOnly = false;
                        secondConversionId = 76486L;
                        secondConversionName = "corporis";
                        status = ApiCoreDtoDatapointsDatapointStatusEnum.ABUSE;
                        tags = new org.openapis.openapi.models.shared.ApiCoreDtoTagsTag[]{{
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(878493L),
                                }};
                                groups = new Long[]{{
                                    add(434156L),
                                }};
                                id = 59944L;
                                name = "Frank Krajcik";
                            }}),
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(434761L),
                                    add(898063L),
                                    add(187552L),
                                }};
                                groups = new Long[]{{
                                    add(715208L),
                                    add(528940L),
                                    add(523006L),
                                }};
                                id = 304446L;
                                name = "Winifred Abernathy";
                            }}),
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(649078L),
                                    add(378245L),
                                }};
                                groups = new Long[]{{
                                    add(979527L),
                                }};
                                id = 970222L;
                                name = "Alberta Harber";
                            }}),
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(63207L),
                                }};
                                groups = new Long[]{{
                                    add(607249L),
                                    add(309251L),
                                    add(477646L),
                                    add(403218L),
                                }};
                                id = 284000L;
                                name = "Jeff Toy";
                            }}),
                        }};
                        thirdConversionId = 367927L;
                        thirdConversionName = "recusandae";
                        title = "Ms.";
                        trackingCode = "provident";
                        type = ApiCoreDtoDatapointsDatapointTypeEnum.TRACKING_LINK;
                        typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics() {{
                            appendQuery = false;
                            browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem() {{
                                emailDestinationUrl = "eum";
                                mobileDestinationUrl = "reiciendis";
                                spidersDestinationUrl = "provident";
                            }};
                            destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum.RANDOM_DESTINATION;
                            domainId = 354506;
                            encodeUrl = false;
                            expirationClicks = 96804L;
                            expirationDate = "20120203120530";
                            firstUrl = "animi";
                            goDomainId = 343392;
                            hideUrl = false;
                            hideUrlTitle = "mollitia";
                            isABTest = false;
                            password = "provident";
                            pauseAfterClicksExpiration = false;
                            pauseAfterDateExpiration = false;
                            randomDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "animi";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "ex";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "aliquid";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "accusantium";
                                }}),
                            }};
                            redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum.TEMPORARY_REDIRECT;
                            referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum.MYSELF;
                            scripts = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo[]{{
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 448143L;
                                    name = "Darin Nienow";
                                }}),
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 266697L;
                                    name = "Virgil Towne";
                                }}),
                            }};
                            sequentialDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "rerum";
                                }}),
                            }};
                            spilloverDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "quis";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "inventore";
                                }}),
                            }};
                            uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem() {{
                                firstDestinationUrl = "fugit";
                            }};
                            url = "cumque";
                            urlAfterClicksExpiration = "quae";
                            urlAfterDateExpiration = "perferendis";
                            urlsByLanguage = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "aspernatur";
                                    url = "eum";
                                }}),
                            }};
                            urlsByNation = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "rem";
                                    url = "at";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "impedit";
                                    url = "eos";
                                }}),
                            }};
                            weightedDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "eum";
                                    weight = 117320;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "minima";
                                    weight = 107004;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "cupiditate";
                                    weight = 589695;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "earum";
                                    weight = 745398;
                                }}),
                            }};
                        }};
                        typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics() {{
                            parameterNote = "hic";
                        }};
                        writePermited = false;
                    }}),
                    add(new ApiCoreDtoDatapointsDatapoint() {{
                        creationDate = "20120203120530";
                        encodeIp = false;
                        fifthConversionId = 848151L;
                        fifthConversionName = "eaque";
                        firstConversionId = 935833L;
                        firstConversionName = "perspiciatis";
                        fourthConversionId = 983427L;
                        fourthConversionName = "debitis";
                        groupId = 399802L;
                        groupName = "porro";
                        id = 380335L;
                        isPublic = false;
                        isSecured = false;
                        lightTracking = false;
                        name = "Denise Runolfsdottir";
                        notes = "animi";
                        preferred = false;
                        redirectOnly = false;
                        secondConversionId = 898760L;
                        secondConversionName = "nulla";
                        status = ApiCoreDtoDatapointsDatapointStatusEnum.ACTIVE;
                        tags = new org.openapis.openapi.models.shared.ApiCoreDtoTagsTag[]{{
                            add(new ApiCoreDtoTagsTag() {{
                                datapoints = new Long[]{{
                                    add(497777L),
                                }};
                                groups = new Long[]{{
                                    add(581082L),
                                    add(382440L),
                                    add(241557L),
                                }};
                                id = 96562L;
                                name = "Melba Stokes I";
                            }}),
                        }};
                        thirdConversionId = 470621L;
                        thirdConversionName = "molestiae";
                        title = "Mr.";
                        trackingCode = "iusto";
                        type = ApiCoreDtoDatapointsDatapointTypeEnum.TRACKING_LINK;
                        typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics() {{
                            appendQuery = false;
                            browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem() {{
                                emailDestinationUrl = "praesentium";
                                mobileDestinationUrl = "maiores";
                                spidersDestinationUrl = "reiciendis";
                            }};
                            destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum.DYNAMIC_URL;
                            domainId = 99958;
                            encodeUrl = false;
                            expirationClicks = 857125L;
                            expirationDate = "20120203120530";
                            firstUrl = "doloremque";
                            goDomainId = 117315;
                            hideUrl = false;
                            hideUrlTitle = "odio";
                            isABTest = false;
                            password = "tempora";
                            pauseAfterClicksExpiration = false;
                            pauseAfterDateExpiration = false;
                            randomDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "ex";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "consectetur";
                                }}),
                            }};
                            redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum.PERMANENT_REDIRECT;
                            referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum.NONE;
                            scripts = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo[]{{
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 123844L;
                                    name = "Janis Ratke";
                                }}),
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 381397L;
                                    name = "Lisa Kemmer";
                                }}),
                                add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                    id = 661607L;
                                    name = "Isabel Schuster";
                                }}),
                            }};
                            sequentialDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "libero";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "ad";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "deleniti";
                                }}),
                            }};
                            spilloverDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "vitae";
                                }}),
                                add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                    url = "repellendus";
                                }}),
                            }};
                            uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem() {{
                                firstDestinationUrl = "ex";
                            }};
                            url = "quo";
                            urlAfterClicksExpiration = "ex";
                            urlAfterDateExpiration = "ut";
                            urlsByLanguage = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "expedita";
                                    url = "voluptatem";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                    languageCode = "molestias";
                                    url = "cum";
                                }}),
                            }};
                            urlsByNation = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem[]{{
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "beatae";
                                    url = "voluptatum";
                                }}),
                                add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                    nation = "omnis";
                                    url = "veritatis";
                                }}),
                            }};
                            weightedDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem[]{{
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "est";
                                    weight = 634786;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "voluptatem";
                                    weight = 959143;
                                }}),
                                add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                    url = "officiis";
                                    weight = 103298;
                                }}),
                            }};
                        }};
                        typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics() {{
                            parameterNote = "fuga";
                        }};
                        writePermited = false;
                    }}),
                }};
            }};            

            DataPointsBatchPutResponse res = sdk.dataPoints.dataPointsBatchPut(req);

            if (res.apiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsCount

Count the datapoints associated to the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsCountRequest;
import org.openapis.openapi.models.operations.DataPointsCountResponse;
import org.openapis.openapi.models.operations.DataPointsCountStatusEnum;
import org.openapis.openapi.models.operations.DataPointsCountTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsCountRequest req = new DataPointsCountRequest() {{
                createdAfter = "debitis";
                createdBefore = "voluptatem";
                onlyFavorites = false;
                status = DataPointsCountStatusEnum.DELETED;
                tags = "deleniti";
                textSearch = "earum";
                type = DataPointsCountTypeEnum.TP;
            }};            

            DataPointsCountResponse res = sdk.dataPoints.dataPointsCount(req);

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsDelete

Delete a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsDeleteRequest;
import org.openapis.openapi.models.operations.DataPointsDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsDeleteRequest req = new DataPointsDeleteRequest(524184L);            

            DataPointsDeleteResponse res = sdk.dataPoints.dataPointsDelete(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsGet

List of all the datapoints associated to the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsGetRequest;
import org.openapis.openapi.models.operations.DataPointsGetResponse;
import org.openapis.openapi.models.operations.DataPointsGetSortDirectionEnum;
import org.openapis.openapi.models.operations.DataPointsGetStatusEnum;
import org.openapis.openapi.models.operations.DataPointsGetTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsGetRequest req = new DataPointsGetRequest() {{
                createdAfter = "nemo";
                createdBefore = "asperiores";
                limit = 190567;
                offset = 355225;
                onlyFavorites = false;
                sortBy = "perferendis";
                sortDirection = DataPointsGetSortDirectionEnum.DESC;
                status = DataPointsGetStatusEnum.PAUSED;
                tags = "impedit";
                textSearch = "quibusdam";
                type = DataPointsGetTypeEnum.TL;
            }};            

            DataPointsGetResponse res = sdk.dataPoints.dataPointsGet(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsGetHits

Retrieve the list of events related to this datapoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsGetHitsFilterEnum;
import org.openapis.openapi.models.operations.DataPointsGetHitsRequest;
import org.openapis.openapi.models.operations.DataPointsGetHitsResponse;
import org.openapis.openapi.models.operations.DataPointsGetHitsTimeframeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsGetHitsRequest req = new DataPointsGetHitsRequest(633415L, DataPointsGetHitsTimeframeEnum.LAST30) {{
                filter = DataPointsGetHitsFilterEnum.UNIQUES;
                fromDay = "inventore";
                limit = 537279;
                offset = "veritatis";
                toDay = "tempora";
            }};            

            DataPointsGetHitsResponse res = sdk.dataPoints.dataPointsGetHits(req);

            if (res.apiCoreDtoClickStreamHitListPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsGetStatisticsAggregatedSingle

Retrieve statistics about this customer for a timeframe by groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsAggregatedSingleRequest;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsAggregatedSingleResponse;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsAggregatedSingleStatusEnum;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsAggregatedSingleTimeFrameEnum;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsAggregatedSingleTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsGetStatisticsAggregatedSingleRequest req = new DataPointsGetStatisticsAggregatedSingleRequest(DataPointsGetStatisticsAggregatedSingleTimeFrameEnum.TODAY) {{
                favourite = false;
                fromDay = "architecto";
                hourly = false;
                status = DataPointsGetStatisticsAggregatedSingleStatusEnum.DELETED;
                tag = "modi";
                toDay = "fugit";
                type = DataPointsGetStatisticsAggregatedSingleTypeEnum.TP;
            }};            

            DataPointsGetStatisticsAggregatedSingleResponse res = sdk.dataPoints.dataPointsGetStatisticsAggregatedSingle(req);

            if (res.apiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsGetStatisticsAllList

Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsAllListGroupByEnum;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsAllListRequest;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsAllListResponse;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsAllListStatusEnum;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsAllListTimeFrameEnum;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsAllListTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsGetStatisticsAllListRequest req = new DataPointsGetStatisticsAllListRequest(DataPointsGetStatisticsAllListTimeFrameEnum.TODAY, DataPointsGetStatisticsAllListTypeEnum.TP) {{
                favourite = false;
                fromDay = "fugiat";
                groupBy = DataPointsGetStatisticsAllListGroupByEnum.WEEK;
                status = DataPointsGetStatisticsAllListStatusEnum.DELETED;
                tag = "ipsa";
                toDay = "quas";
            }};            

            DataPointsGetStatisticsAllListResponse res = sdk.dataPoints.dataPointsGetStatisticsAllList(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsGetStatisticsList

Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsListGroupByEnum;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsListRequest;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsListResponse;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsListTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsGetStatisticsListRequest req = new DataPointsGetStatisticsListRequest(773456L, DataPointsGetStatisticsListTimeFrameEnum.BEGINNING) {{
                fromDay = "esse";
                groupBy = DataPointsGetStatisticsListGroupByEnum.MONTH;
                toDay = "sed";
            }};            

            DataPointsGetStatisticsListResponse res = sdk.dataPoints.dataPointsGetStatisticsList(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsGetStatisticsSingle

Retrieve statistics about this datapoint for a timeframe

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsSingleRequest;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsSingleResponse;
import org.openapis.openapi.models.operations.DataPointsGetStatisticsSingleTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsGetStatisticsSingleRequest req = new DataPointsGetStatisticsSingleRequest(199596L, DataPointsGetStatisticsSingleTimeFrameEnum.LAST12MONTHS) {{
                fromDay = "eum";
                hourly = false;
                toDay = "vel";
            }};            

            DataPointsGetStatisticsSingleResponse res = sdk.dataPoints.dataPointsGetStatisticsSingle(req);

            if (res.apiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsPatchFavourite

Fast switch the "favourite" field of a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsPatchFavouriteRequest;
import org.openapis.openapi.models.operations.DataPointsPatchFavouriteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsPatchFavouriteRequest req = new DataPointsPatchFavouriteRequest(301692L);            

            DataPointsPatchFavouriteResponse res = sdk.dataPoints.dataPointsPatchFavourite(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsPatchNotesForm

Fast patch the "notes" field of a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsPatchNotesFormRequest;
import org.openapis.openapi.models.operations.DataPointsPatchNotesFormResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsPatchNotesFormRequest req = new DataPointsPatchNotesFormRequest(                new ApiCoreRequestsGenericTextPatch() {{
                                text = "ab";
                            }};, 781480L);            

            DataPointsPatchNotesFormResponse res = sdk.dataPoints.dataPointsPatchNotesForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsPatchNotesJson

Fast patch the "notes" field of a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsPatchNotesJsonRequest;
import org.openapis.openapi.models.operations.DataPointsPatchNotesJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsPatchNotesJsonRequest req = new DataPointsPatchNotesJsonRequest(                new ApiCoreRequestsGenericTextPatch() {{
                                text = "nobis";
                            }};, 388319L);            

            DataPointsPatchNotesJsonResponse res = sdk.dataPoints.dataPointsPatchNotesJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsPatchNotesRaw

Fast patch the "notes" field of a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsPatchNotesRawRequest;
import org.openapis.openapi.models.operations.DataPointsPatchNotesRawResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsPatchNotesRawRequest req = new DataPointsPatchNotesRawRequest("consequuntur".getBytes(), 28952L);            

            DataPointsPatchNotesRawResponse res = sdk.dataPoints.dataPointsPatchNotesRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsPost

Update a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsPostRequest;
import org.openapis.openapi.models.operations.DataPointsPostResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsBrowserBaseDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapoint;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointStatusEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecifics;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingPixelSpecifics;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUniqueDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoTagsTag;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DataPointsPostRequest req = new DataPointsPostRequest(                new ApiCoreDtoDatapointsDatapoint() {{
                                creationDate = "20120203120530";
                                encodeIp = false;
                                fifthConversionId = 895692L;
                                fifthConversionName = "quasi";
                                firstConversionId = 392569L;
                                firstConversionName = "at";
                                fourthConversionId = 878373L;
                                fourthConversionName = "est";
                                groupId = 690785L;
                                groupName = "sequi";
                                id = 987349L;
                                isPublic = false;
                                isSecured = false;
                                lightTracking = false;
                                name = "Earnest McClure";
                                notes = "blanditiis";
                                preferred = false;
                                redirectOnly = false;
                                secondConversionId = 642352L;
                                secondConversionName = "voluptas";
                                status = ApiCoreDtoDatapointsDatapointStatusEnum.PAUSED;
                                tags = new org.openapis.openapi.models.shared.ApiCoreDtoTagsTag[]{{
                                    add(new ApiCoreDtoTagsTag() {{
                                        datapoints = new Long[]{{
                                            add(260904L),
                                            add(131903L),
                                            add(495970L),
                                        }};
                                        groups = new Long[]{{
                                            add(681740L),
                                        }};
                                        id = 514054L;
                                        name = "Joyce Leffler III";
                                    }}),
                                    add(new ApiCoreDtoTagsTag() {{
                                        datapoints = new Long[]{{
                                            add(233078L),
                                        }};
                                        groups = new Long[]{{
                                            add(585432L),
                                        }};
                                        id = 970732L;
                                        name = "John Monahan";
                                    }}),
                                }};
                                thirdConversionId = 612867L;
                                thirdConversionName = "magni";
                                title = "Mr.";
                                trackingCode = "fuga";
                                type = ApiCoreDtoDatapointsDatapointTypeEnum.TRACKING_PIXEL;
                                typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics() {{
                                    appendQuery = false;
                                    browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem() {{
                                        emailDestinationUrl = "voluptatibus";
                                        mobileDestinationUrl = "distinctio";
                                        spidersDestinationUrl = "omnis";
                                    }};;
                                    destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum.WEIGHTED_DESTINATION;
                                    domainId = 328379;
                                    encodeUrl = false;
                                    expirationClicks = 507636L;
                                    expirationDate = "20120203120530";
                                    firstUrl = "maxime";
                                    goDomainId = 300403;
                                    hideUrl = false;
                                    hideUrlTitle = "temporibus";
                                    isABTest = false;
                                    password = "quos";
                                    pauseAfterClicksExpiration = false;
                                    pauseAfterDateExpiration = false;
                                    randomDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "itaque";
                                        }}),
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "commodi";
                                        }}),
                                    }};
                                    redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum.TEMPORARY_REDIRECT;
                                    referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum.MYSELF;
                                    scripts = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo[]{{
                                        add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                            id = 722184L;
                                            name = "Kenneth Hilpert Sr.";
                                        }}),
                                        add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                            id = 247685L;
                                            name = "Lloyd Mayer";
                                        }}),
                                    }};
                                    sequentialDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "nemo";
                                        }}),
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "reprehenderit";
                                        }}),
                                    }};
                                    spilloverDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "quis";
                                        }}),
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "sint";
                                        }}),
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "accusamus";
                                        }}),
                                    }};
                                    uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem() {{
                                        firstDestinationUrl = "impedit";
                                    }};;
                                    url = "hic";
                                    urlAfterClicksExpiration = "necessitatibus";
                                    urlAfterDateExpiration = "asperiores";
                                    urlsByLanguage = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem[]{{
                                        add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                            languageCode = "voluptas";
                                            url = "debitis";
                                        }}),
                                        add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                            languageCode = "delectus";
                                            url = "quae";
                                        }}),
                                    }};
                                    urlsByNation = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem[]{{
                                        add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                            nation = "fuga";
                                            url = "laborum";
                                        }}),
                                        add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                            nation = "consectetur";
                                            url = "velit";
                                        }}),
                                        add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                            nation = "atque";
                                            url = "ipsum";
                                        }}),
                                        add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                            nation = "impedit";
                                            url = "magni";
                                        }}),
                                    }};
                                    weightedDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem[]{{
                                        add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                            url = "repudiandae";
                                            weight = 721430;
                                        }}),
                                        add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                            url = "dolore";
                                            weight = 482892;
                                        }}),
                                        add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                            url = "voluptate";
                                            weight = 194023;
                                        }}),
                                    }};
                                }};;
                                typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics() {{
                                    parameterNote = "dignissimos";
                                }};;
                                writePermited = false;
                            }};, 205566L);            

            DataPointsPostResponse res = sdk.dataPoints.dataPointsPost(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataPointsPut

Create a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataPointsPutResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsBrowserBaseDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapoint;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointStatusEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecifics;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingPixelSpecifics;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUniqueDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoTagsTag;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapoint req = new ApiCoreDtoDatapointsDatapoint() {{
                creationDate = "20120203120530";
                encodeIp = false;
                fifthConversionId = 535468L;
                fifthConversionName = "quibusdam";
                firstConversionId = 437814L;
                firstConversionName = "odit";
                fourthConversionId = 974990L;
                fourthConversionName = "vel";
                groupId = 300824L;
                groupName = "quibusdam";
                id = 78969L;
                isPublic = false;
                isSecured = false;
                lightTracking = false;
                name = "Wm Brakus";
                notes = "porro";
                preferred = false;
                redirectOnly = false;
                secondConversionId = 304198L;
                secondConversionName = "velit";
                status = ApiCoreDtoDatapointsDatapointStatusEnum.ACTIVE;
                tags = new org.openapis.openapi.models.shared.ApiCoreDtoTagsTag[]{{
                    add(new ApiCoreDtoTagsTag() {{
                        datapoints = new Long[]{{
                            add(406922L),
                            add(107617L),
                        }};
                        groups = new Long[]{{
                            add(568218L),
                            add(431994L),
                            add(246557L),
                            add(284086L),
                        }};
                        id = 596433L;
                        name = "Keith Rutherford";
                    }}),
                }};
                thirdConversionId = 932562L;
                thirdConversionName = "alias";
                title = "Mrs.";
                trackingCode = "itaque";
                type = ApiCoreDtoDatapointsDatapointTypeEnum.TRACKING_LINK;
                typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics() {{
                    appendQuery = false;
                    browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem() {{
                        emailDestinationUrl = "laborum";
                        mobileDestinationUrl = "non";
                        spidersDestinationUrl = "dolor";
                    }};;
                    destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum.DYNAMIC_URL;
                    domainId = 24753;
                    encodeUrl = false;
                    expirationClicks = 39992L;
                    expirationDate = "20120203120530";
                    firstUrl = "consequatur";
                    goDomainId = 639705;
                    hideUrl = false;
                    hideUrlTitle = "recusandae";
                    isABTest = false;
                    password = "ea";
                    pauseAfterClicksExpiration = false;
                    pauseAfterDateExpiration = false;
                    randomDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                            url = "voluptas";
                        }}),
                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                            url = "facilis";
                        }}),
                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                            url = "placeat";
                        }}),
                    }};
                    redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum.TEMPORARY_REDIRECT;
                    referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum.MYSELF;
                    scripts = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo[]{{
                        add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                            id = 954334L;
                            name = "June Miller";
                        }}),
                        add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                            id = 769967L;
                            name = "Dana Ortiz";
                        }}),
                        add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                            id = 288570L;
                            name = "Mr. Eula Feest";
                        }}),
                    }};
                    sequentialDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                            url = "qui";
                        }}),
                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                            url = "iste";
                        }}),
                    }};
                    spilloverDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                            url = "nemo";
                        }}),
                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                            url = "soluta";
                        }}),
                    }};
                    uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem() {{
                        firstDestinationUrl = "libero";
                    }};;
                    url = "rem";
                    urlAfterClicksExpiration = "dolorum";
                    urlAfterDateExpiration = "odio";
                    urlsByLanguage = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem[]{{
                        add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                            languageCode = "alias";
                            url = "magni";
                        }}),
                    }};
                    urlsByNation = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem[]{{
                        add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                            nation = "quae";
                            url = "quae";
                        }}),
                        add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                            nation = "modi";
                            url = "neque";
                        }}),
                    }};
                    weightedDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem[]{{
                        add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                            url = "itaque";
                            weight = 88248;
                        }}),
                        add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                            url = "ipsum";
                            weight = 602229;
                        }}),
                    }};
                }};;
                typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics() {{
                    parameterNote = "nulla";
                }};;
                writePermited = false;
            }};            

            DataPointsPutResponse res = sdk.dataPoints.dataPointsPut(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatapointsId

Get a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatapointsIdRequest;
import org.openapis.openapi.models.operations.GetDatapointsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDatapointsIdRequest req = new GetDatapointsIdRequest(802894L);            

            GetDatapointsIdResponse res = sdk.dataPoints.getDatapointsId(req);

            if (res.apiCoreDtoDatapointsDatapoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
