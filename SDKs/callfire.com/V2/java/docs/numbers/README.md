# numbers

### Available Operations

* [findNumberLeaseConfigs](#findnumberleaseconfigs) - Find lease configs
* [findNumberLeases](#findnumberleases) - Find leases
* [findNumberRegions](#findnumberregions) - Find number regions
* [findNumbersLocal](#findnumberslocal) - Find local numbers
* [findNumbersTollfree](#findnumberstollfree) - Find tollfree numbers
* [getNumberLease](#getnumberlease) - Find a specific lease
* [getNumberLeaseConfig](#getnumberleaseconfig) - Find a specific lease config
* [updateNumberLease](#updatenumberlease) - Update a lease
* [updateNumberLeaseConfig](#updatenumberleaseconfig) - Update a lease config

## findNumberLeaseConfigs

Searches for all number lease configs for the user. Returns a paged list of NumberConfig

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindNumberLeaseConfigsRequest;
import org.openapis.openapi.models.operations.FindNumberLeaseConfigsResponse;
import org.openapis.openapi.models.operations.FindNumberLeaseConfigsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindNumberLeaseConfigsRequest req = new FindNumberLeaseConfigsRequest() {{
                city = "North Stephanyburgh";
                fields = "veniam";
                labelName = "in";
                limit = 889234;
                offset = 104627;
                prefix = "laudantium";
                state = "exercitationem";
                zipcode = "73656-9782";
            }};            

            FindNumberLeaseConfigsResponse res = sdk.numbers.findNumberLeaseConfigs(req, new FindNumberLeaseConfigsSecurity("dolorum", "nostrum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numberConfigPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findNumberLeases

Searches for all numbers leased by account user. This API is useful for finding all numbers currently owned by the user. Returns a paged list of number leases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindNumberLeasesRequest;
import org.openapis.openapi.models.operations.FindNumberLeasesResponse;
import org.openapis.openapi.models.operations.FindNumberLeasesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindNumberLeasesRequest req = new FindNumberLeasesRequest() {{
                city = "Padbergstad";
                fields = "accusamus";
                labelName = "tempora";
                limit = 543678;
                offset = 148268;
                prefix = "ut";
                state = "fugiat";
                tollFree = false;
                zipcode = "67204";
            }};            

            FindNumberLeasesResponse res = sdk.numbers.findNumberLeases(req, new FindNumberLeasesSecurity("ipsam", "sit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numberLeasePage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findNumberRegions

Searches for region information. Use this API to obtain detailed region information that can be used to query for more specific phone numbers than a general query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindNumberRegionsRequest;
import org.openapis.openapi.models.operations.FindNumberRegionsResponse;
import org.openapis.openapi.models.operations.FindNumberRegionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindNumberRegionsRequest req = new FindNumberRegionsRequest() {{
                city = "Kearashire";
                cityPrefix = "corporis";
                country = "Belize";
                fields = "blanditiis";
                limit = 405942;
                offset = 153627;
                prefix = "sit";
                state = "vel";
                zipcode = "96029";
            }};            

            FindNumberRegionsResponse res = sdk.numbers.findNumberRegions(req, new FindNumberRegionsSecurity("dolorem", "harum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.regionPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findNumbersLocal

Searches for numbers available for purchase in CallFire local numbers catalog . At least one additional parameter is required. User may filter local numbers by their region information. If all numbers with desirable zip code is already busy search will return available numbers with nearest zip code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindNumbersLocalRequest;
import org.openapis.openapi.models.operations.FindNumbersLocalResponse;
import org.openapis.openapi.models.operations.FindNumbersLocalSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindNumbersLocalRequest req = new FindNumbersLocalRequest() {{
                city = "North Kittyboro";
                fields = "quidem";
                limit = 539074;
                prefix = "laborum";
                state = "nam";
                zipcode = "30264-6958";
            }};            

            FindNumbersLocalResponse res = sdk.numbers.findNumbersLocal(req, new FindNumbersLocalSecurity("delectus", "voluptates") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numberList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findNumbersTollfree

Searches for the toll free numbers which are available for purchase in the CallFire catalog

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindNumbersTollfreeRequest;
import org.openapis.openapi.models.operations.FindNumbersTollfreeResponse;
import org.openapis.openapi.models.operations.FindNumbersTollfreeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindNumbersTollfreeRequest req = new FindNumbersTollfreeRequest() {{
                fields = "perferendis";
                limit = 667285;
                pattern = "quidem";
            }};            

            FindNumbersTollfreeResponse res = sdk.numbers.findNumbersTollfree(req, new FindNumbersTollfreeSecurity("reprehenderit", "facere") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numberList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNumberLease

Returns a single NumberLease instance for a given number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumberLeaseRequest;
import org.openapis.openapi.models.operations.GetNumberLeaseResponse;
import org.openapis.openapi.models.operations.GetNumberLeaseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumberLeaseRequest req = new GetNumberLeaseRequest("fuga") {{
                fields = "praesentium";
            }};            

            GetNumberLeaseResponse res = sdk.numbers.getNumberLease(req, new GetNumberLeaseSecurity("mollitia", "veniam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numberLease != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNumberLeaseConfig

Returns a single NumberConfig instance for a given number lease

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumberLeaseConfigRequest;
import org.openapis.openapi.models.operations.GetNumberLeaseConfigResponse;
import org.openapis.openapi.models.operations.GetNumberLeaseConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumberLeaseConfigRequest req = new GetNumberLeaseConfigRequest("voluptatem") {{
                fields = "quisquam";
            }};            

            GetNumberLeaseConfigResponse res = sdk.numbers.getNumberLeaseConfig(req, new GetNumberLeaseConfigSecurity("repudiandae", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numberConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNumberLease

Updates a number lease instance. Ability to turn on/off autoRenew and toggle call/text features for a particular number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNumberLeaseRequest;
import org.openapis.openapi.models.operations.UpdateNumberLeaseResponse;
import org.openapis.openapi.models.operations.UpdateNumberLeaseSecurity;
import org.openapis.openapi.models.shared.NumberLeaseCallFeatureStatusEnum;
import org.openapis.openapi.models.shared.NumberLeaseInput;
import org.openapis.openapi.models.shared.NumberLeaseTextFeatureStatusEnum;
import org.openapis.openapi.models.shared.NumberLeaseTypeEnum;
import org.openapis.openapi.models.shared.Region;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateNumberLeaseRequest req = new UpdateNumberLeaseRequest("atque") {{
                numberLeaseInput = new NumberLeaseInput() {{
                    autoRenew = false;
                    callFeatureStatus = NumberLeaseCallFeatureStatusEnum.PENDING;
                    labels = new String[]{{
                        add("totam"),
                        add("suscipit"),
                        add("quidem"),
                        add("maxime"),
                    }};
                    leaseBegin = 90885L;
                    leaseEnd = 461007L;
                    nationalFormat = "amet";
                    number = "assumenda";
                    region = new Region() {{
                        city = "Kameronfurt";
                        country = "Timor-Leste";
                        latitude = 8869.61;
                        longitude = 8801.07;
                        prefix = "natus";
                        state = "minima";
                        timeZone = "aspernatur";
                        zipcode = "95865";
                    }};;
                    sendEmailOnCreate = false;
                    textFeatureStatus = NumberLeaseTextFeatureStatusEnum.PENDING;
                    tollFree = false;
                    type = NumberLeaseTypeEnum.EXTRA;
                }};;
            }};            

            UpdateNumberLeaseResponse res = sdk.numbers.updateNumberLease(req, new UpdateNumberLeaseSecurity("atque", "atque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNumberLeaseConfig

Updates a phone number lease configuration. Use this API endpoint to add an Inbound IVR or Call Tracking feature to a CallFire phone number. Call tracking configuration allows you to track the incoming calls, to analyze and to respond customers using sms or voice replies. For more information see [call tracking page](https://www.callfire.com/products/call-tracking)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNumberLeaseConfigRequest;
import org.openapis.openapi.models.operations.UpdateNumberLeaseConfigResponse;
import org.openapis.openapi.models.operations.UpdateNumberLeaseConfigSecurity;
import org.openapis.openapi.models.shared.CallTrackingConfig;
import org.openapis.openapi.models.shared.GoogleAnalytics;
import org.openapis.openapi.models.shared.IvrInboundConfig;
import org.openapis.openapi.models.shared.LocalTime;
import org.openapis.openapi.models.shared.NumberConfig;
import org.openapis.openapi.models.shared.NumberConfigConfigTypeEnum;
import org.openapis.openapi.models.shared.TextInboundConfig;
import org.openapis.openapi.models.shared.WeeklySchedule;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateNumberLeaseConfigRequest req = new UpdateNumberLeaseConfigRequest("sunt") {{
                numberConfig = new NumberConfig() {{
                    callTrackingConfig = new CallTrackingConfig() {{
                        failedTransferSoundId = 923306L;
                        googleAnalytics = new GoogleAnalytics() {{
                            category = "dolorum";
                            domain = "repellendus";
                            googleAccountId = "labore";
                        }};;
                        introSoundId = 968287L;
                        recorded = false;
                        screen = false;
                        transferNumbers = new String[]{{
                            add("repudiandae"),
                        }};
                        voicemail = false;
                        voicemailSoundId = 116098L;
                        weeklySchedule = new WeeklySchedule() {{
                            daysOfWeek = new String[]{{
                                add("beatae"),
                            }};
                            startTimeOfDay = new LocalTime() {{
                                hour = 174772;
                                minute = 316488;
                                nano = 389135;
                                second = 246535;
                            }};;
                            stopTimeOfDay = new LocalTime() {{
                                hour = 952143;
                                minute = 562783;
                                nano = 300029;
                                second = 906355;
                            }};;
                            timeZone = "consequuntur";
                        }};;
                        whisperSoundId = 580107L;
                    }};;
                    configType = NumberConfigConfigTypeEnum.TRACKING;
                    ivrInboundConfig = new IvrInboundConfig() {{
                        dialplanXml = "perspiciatis";
                    }};;
                    number = "in";
                    textInboundConfig = new TextInboundConfig() {{
                        forwardEnabled = false;
                        forwardNumber = "adipisci";
                    }};;
                }};;
            }};            

            UpdateNumberLeaseConfigResponse res = sdk.numbers.updateNumberLeaseConfig(req, new UpdateNumberLeaseConfigSecurity("eveniet", "occaecati") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
