# account

### Available Operations

* [accountDeleteDomainWhitelist](#accountdeletedomainwhitelist) - Delete an domain entry
* [accountDeleteGuest](#accountdeleteguest) - Delete a guest
* [accountDeleteIpBlacklist](#accountdeleteipblacklist) - Delete an ip blacklist entry
* [accountGet](#accountget) - Retrieve current account data
* [accountGetDomainWhitelist](#accountgetdomainwhitelist) - Retrieve list of a domains allowed to redirect in DDU mode
* [accountGetGuest](#accountgetguest) - Retrieve a guest
* [accountGetGuests](#accountgetguests) - Retrieve list of a guest
* [accountGetGuestsCount](#accountgetguestscount) - Retrieve count of guests
* [accountGetIpBlacklist](#accountgetipblacklist) - Retrieve list of a ip to exclude from event tracking
* [accountGetPermissions](#accountgetpermissions) - Retrieve permissions for a guest
* [accountGetPermissionsCount](#accountgetpermissionscount) - Retrieve count of the permissions for a guest
* [accountGetPlan](#accountgetplan) - Retrieve current account plan
* [accountPatchPermissionsForm](#accountpatchpermissionsform) - Change the permission on a shared object
* [accountPatchPermissionsJson](#accountpatchpermissionsjson) - Change the permission on a shared object
* [accountPatchPermissionsRaw](#accountpatchpermissionsraw) - Change the permission on a shared object
* [accountPostGuestForm](#accountpostguestform) - Update a guest
* [accountPostGuestJson](#accountpostguestjson) - Update a guest
* [accountPostGuestRaw](#accountpostguestraw) - Update a guest
* [accountPostForm](#accountpostform) - Update current account data
* [accountPostJson](#accountpostjson) - Update current account data
* [accountPostRaw](#accountpostraw) - Update current account data
* [accountPutDomainWhitelistForm](#accountputdomainwhitelistform) - Create an domain entry
* [accountPutDomainWhitelistJson](#accountputdomainwhitelistjson) - Create an domain entry
* [accountPutDomainWhitelistRaw](#accountputdomainwhitelistraw) - Create an domain entry
* [accountPutGuestForm](#accountputguestform) - Create a guest
* [accountPutGuestJson](#accountputguestjson) - Create a guest
* [accountPutGuestRaw](#accountputguestraw) - Create a guest
* [accountPutIpBlacklistForm](#accountputipblacklistform) - Create an ip blacklist entry
* [accountPutIpBlacklistJson](#accountputipblacklistjson) - Create an ip blacklist entry
* [accountPutIpBlacklistRaw](#accountputipblacklistraw) - Create an ip blacklist entry
* [postAccountGuestsGuestIdTypePermissionsPatchForm](#postaccountguestsguestidtypepermissionspatchform) - Change the permission on a shared object
* [postAccountGuestsGuestIdTypePermissionsPatchJson](#postaccountguestsguestidtypepermissionspatchjson) - Change the permission on a shared object
* [postAccountGuestsGuestIdTypePermissionsPatchRaw](#postaccountguestsguestidtypepermissionspatchraw) - Change the permission on a shared object

## accountDeleteDomainWhitelist

Delete an domain entry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountDeleteDomainWhitelistRequest;
import org.openapis.openapi.models.operations.AccountDeleteDomainWhitelistResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountDeleteDomainWhitelistRequest req = new AccountDeleteDomainWhitelistRequest("quibusdam");            

            AccountDeleteDomainWhitelistResponse res = sdk.account.accountDeleteDomainWhitelist(req);

            if (res.apiCoreDtoAccountingDomainWhitelistEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountDeleteGuest

Delete a guest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountDeleteGuestRequest;
import org.openapis.openapi.models.operations.AccountDeleteGuestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountDeleteGuestRequest req = new AccountDeleteGuestRequest(857946L);            

            AccountDeleteGuestResponse res = sdk.account.accountDeleteGuest(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountDeleteIpBlacklist

Delete an ip blacklist entry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountDeleteIpBlacklistRequest;
import org.openapis.openapi.models.operations.AccountDeleteIpBlacklistResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountDeleteIpBlacklistRequest req = new AccountDeleteIpBlacklistRequest("illum");            

            AccountDeleteIpBlacklistResponse res = sdk.account.accountDeleteIpBlacklist(req);

            if (res.apiCoreDtoAccountingIpBlacklistEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGet

Retrieve current account data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountGetResponse res = sdk.account.accountGet();

            if (res.apiCoreDtoAccountingUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetDomainWhitelist

Retrieve list of a domains allowed to redirect in DDU mode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetDomainWhitelistRequest;
import org.openapis.openapi.models.operations.AccountGetDomainWhitelistResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountGetDomainWhitelistRequest req = new AccountGetDomainWhitelistRequest() {{
                limit = 645894;
                offset = 384382;
            }};            

            AccountGetDomainWhitelistResponse res = sdk.account.accountGetDomainWhitelist(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetGuest

Retrieve a guest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetGuestRequest;
import org.openapis.openapi.models.operations.AccountGetGuestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountGetGuestRequest req = new AccountGetGuestRequest(297534L);            

            AccountGetGuestResponse res = sdk.account.accountGetGuest(req);

            if (res.apiCoreDtoAccountingGuest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetGuests

Retrieve list of a guest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetGuestsRequest;
import org.openapis.openapi.models.operations.AccountGetGuestsResponse;
import org.openapis.openapi.models.operations.AccountGetGuestsSortDirectionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountGetGuestsRequest req = new AccountGetGuestsRequest() {{
                limit = 56713;
                offset = 963663;
                sortBy = "tempora";
                sortDirection = AccountGetGuestsSortDirectionEnum.ASC;
                textSearch = "molestiae";
            }};            

            AccountGetGuestsResponse res = sdk.account.accountGetGuests(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetGuestsCount

Retrieve count of guests

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetGuestsCountRequest;
import org.openapis.openapi.models.operations.AccountGetGuestsCountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountGetGuestsCountRequest req = new AccountGetGuestsCountRequest() {{
                textSearch = "placeat";
            }};            

            AccountGetGuestsCountResponse res = sdk.account.accountGetGuestsCount(req);

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetIpBlacklist

Retrieve list of a ip to exclude from event tracking

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetIpBlacklistRequest;
import org.openapis.openapi.models.operations.AccountGetIpBlacklistResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountGetIpBlacklistRequest req = new AccountGetIpBlacklistRequest() {{
                limit = 479977;
                offset = 568045;
            }};            

            AccountGetIpBlacklistResponse res = sdk.account.accountGetIpBlacklist(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetPermissions

Retrieve permissions for a guest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetPermissionsEntityTypeEnum;
import org.openapis.openapi.models.operations.AccountGetPermissionsRequest;
import org.openapis.openapi.models.operations.AccountGetPermissionsResponse;
import org.openapis.openapi.models.operations.AccountGetPermissionsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountGetPermissionsRequest req = new AccountGetPermissionsRequest(925597L) {{
                entityId = 836079L;
                entityType = AccountGetPermissionsEntityTypeEnum.DATAPOINT;
                limit = 337396;
                offset = 87129;
                type = AccountGetPermissionsTypeEnum.W;
            }};            

            AccountGetPermissionsResponse res = sdk.account.accountGetPermissions(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetPermissionsCount

Retrieve count of the permissions for a guest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetPermissionsCountEntityTypeEnum;
import org.openapis.openapi.models.operations.AccountGetPermissionsCountRequest;
import org.openapis.openapi.models.operations.AccountGetPermissionsCountResponse;
import org.openapis.openapi.models.operations.AccountGetPermissionsCountTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountGetPermissionsCountRequest req = new AccountGetPermissionsCountRequest(368241L) {{
                entityId = 832620L;
                entityType = AccountGetPermissionsCountEntityTypeEnum.GROUP;
                type = AccountGetPermissionsCountTypeEnum.W;
            }};            

            AccountGetPermissionsCountResponse res = sdk.account.accountGetPermissionsCount(req);

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetPlan

Retrieve current account plan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountGetPlanResponse res = sdk.account.accountGetPlan();

            if (res.apiCoreDtoAccountingPlan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPatchPermissionsForm

Change the permission on a shared object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPatchPermissionsFormRequest;
import org.openapis.openapi.models.operations.AccountPatchPermissionsFormResponse;
import org.openapis.openapi.models.operations.AccountPatchPermissionsFormTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreRequestsPermissionPatchRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountPatchPermissionsFormRequest req = new AccountPatchPermissionsFormRequest(                new ApiCoreRequestsPermissionPatchRequest() {{
                                action = "at";
                                id = 978619L;
                                verb = "molestiae";
                            }};, 799159L, AccountPatchPermissionsFormTypeEnum.GROUP);            

            AccountPatchPermissionsFormResponse res = sdk.account.accountPatchPermissionsForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPatchPermissionsJson

Change the permission on a shared object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPatchPermissionsJsonRequest;
import org.openapis.openapi.models.operations.AccountPatchPermissionsJsonResponse;
import org.openapis.openapi.models.operations.AccountPatchPermissionsJsonTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreRequestsPermissionPatchRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountPatchPermissionsJsonRequest req = new AccountPatchPermissionsJsonRequest(                new ApiCoreRequestsPermissionPatchRequest() {{
                                action = "totam";
                                id = 780529L;
                                verb = "dolorum";
                            }};, 118274L, AccountPatchPermissionsJsonTypeEnum.GROUP);            

            AccountPatchPermissionsJsonResponse res = sdk.account.accountPatchPermissionsJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPatchPermissionsRaw

Change the permission on a shared object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPatchPermissionsRawRequest;
import org.openapis.openapi.models.operations.AccountPatchPermissionsRawResponse;
import org.openapis.openapi.models.operations.AccountPatchPermissionsRawTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreRequestsPermissionPatchRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountPatchPermissionsRawRequest req = new AccountPatchPermissionsRawRequest("occaecati".getBytes(), 143353L, AccountPatchPermissionsRawTypeEnum.GROUP);            

            AccountPatchPermissionsRawResponse res = sdk.account.accountPatchPermissionsRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPostGuestForm

Update a guest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPostGuestFormRequest;
import org.openapis.openapi.models.operations.AccountPostGuestFormResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingConversionOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingExtendedGrants;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuest;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuestTimeFormatEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingHitOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoGrantsGrant;
import org.openapis.openapi.models.shared.ApiCoreResponsesEntityUriSystemInt64;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountPostGuestFormRequest req = new AccountPostGuestFormRequest(                new ApiCoreDtoAccountingGuest() {{
                                apiKey = "optio";
                                conversionOptions = new ApiCoreDtoAccountingConversionOptions() {{
                                    hideComCost = false;
                                    hideCost = false;
                                    hideCount = false;
                                    hideParams = false;
                                    hideValue = false;
                                    percentCommission = 521848;
                                    percentValue = 105907;
                                }};;
                                creationDate = "20120203120530";
                                currentGrant = new ApiCoreDtoGrantsGrant() {{
                                    datapointType = "commodi";
                                    entity = new ApiCoreResponsesEntityUriSystemInt64() {{
                                        id = 473600L;
                                        uri = "http://dental-schedule.net";
                                    }};;
                                    entityName = "esse";
                                    entityType = "ipsum";
                                    type = "excepturi";
                                }};;
                                dateFormat = "aspernatur";
                                decimalSeparator = "perferendis";
                                email = "Lia.Cormier@gmail.com";
                                extendedGrants = new ApiCoreDtoAccountingExtendedGrants() {{
                                    allowAllGrants = false;
                                    allowGroupCreation = false;
                                }};;
                                groupGrants = 616934L;
                                hitOptions = new ApiCoreDtoAccountingHitOptions() {{
                                    hideReferrer = false;
                                }};;
                                id = 386489L;
                                key = "hic";
                                language = "saepe";
                                loginCount = 681820;
                                name = "Stacy Moore";
                                notes = "quidem";
                                numberGroupSeparator = "architecto";
                                password = "ipsa";
                                timeFormat = ApiCoreDtoAccountingGuestTimeFormatEnum.H24;
                                timeZone = 666767;
                                timeframeMinDate = "20120203120530";
                                timezonename = "mollitia";
                                tlGrants = 670638L;
                                tpGrants = 170909L;
                                userName = "Corrine75";
                            }};, 315428L);            

            AccountPostGuestFormResponse res = sdk.account.accountPostGuestForm(req);

            if (res.apiCoreDtoAccountingGuest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPostGuestJson

Update a guest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPostGuestJsonRequest;
import org.openapis.openapi.models.operations.AccountPostGuestJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingConversionOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingExtendedGrants;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuest;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuestTimeFormatEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingHitOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoGrantsGrant;
import org.openapis.openapi.models.shared.ApiCoreResponsesEntityUriSystemInt64;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountPostGuestJsonRequest req = new AccountPostGuestJsonRequest(                new ApiCoreDtoAccountingGuest() {{
                                apiKey = "nemo";
                                conversionOptions = new ApiCoreDtoAccountingConversionOptions() {{
                                    hideComCost = false;
                                    hideCost = false;
                                    hideCount = false;
                                    hideParams = false;
                                    hideValue = false;
                                    percentCommission = 325047;
                                    percentValue = 570197;
                                }};;
                                creationDate = "20120203120530";
                                currentGrant = new ApiCoreDtoGrantsGrant() {{
                                    datapointType = "accusantium";
                                    entity = new ApiCoreResponsesEntityUriSystemInt64() {{
                                        id = 438601L;
                                        uri = "https://wrathful-violet.com";
                                    }};;
                                    entityName = "mollitia";
                                    entityType = "dolorem";
                                    type = "culpa";
                                }};;
                                dateFormat = "consequuntur";
                                decimalSeparator = "repellat";
                                email = "Kristina.Fritsch@yahoo.com";
                                extendedGrants = new ApiCoreDtoAccountingExtendedGrants() {{
                                    allowAllGrants = false;
                                    allowGroupCreation = false;
                                }};;
                                groupGrants = 474697L;
                                hitOptions = new ApiCoreDtoAccountingHitOptions() {{
                                    hideReferrer = false;
                                }};;
                                id = 244425L;
                                key = "error";
                                language = "quia";
                                loginCount = 338007;
                                name = "Kayla O'Kon";
                                notes = "quo";
                                numberGroupSeparator = "sequi";
                                password = "tenetur";
                                timeFormat = ApiCoreDtoAccountingGuestTimeFormatEnum.AM_PM;
                                timeZone = 662527;
                                timeframeMinDate = "20120203120530";
                                timezonename = "possimus";
                                tlGrants = 13571L;
                                tpGrants = 97101L;
                                userName = "Lina.Smitham97";
                            }};, 976460L);            

            AccountPostGuestJsonResponse res = sdk.account.accountPostGuestJson(req);

            if (res.apiCoreDtoAccountingGuest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPostGuestRaw

Update a guest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPostGuestRawRequest;
import org.openapis.openapi.models.operations.AccountPostGuestRawResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingConversionOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingExtendedGrants;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuest;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuestTimeFormatEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingHitOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoGrantsGrant;
import org.openapis.openapi.models.shared.ApiCoreResponsesEntityUriSystemInt64;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountPostGuestRawRequest req = new AccountPostGuestRawRequest("nihil".getBytes(), 509624L);            

            AccountPostGuestRawResponse res = sdk.account.accountPostGuestRaw(req);

            if (res.apiCoreDtoAccountingGuest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPostForm

Update current account data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPostFormResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingUser;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoAccountingUser req = new ApiCoreDtoAccountingUser() {{
                boGoVal = "ipsa";
                bonusClicks = 604846L;
                companyName = "voluptate";
                companyRole = "cum";
                email = "Alison97@gmail.com";
                firstName = "Blanche";
                lastName = "Hessel";
                phone = "516-484-9026 x558";
                redirectOnly = false;
                registrationDate = "20120203120530";
                timeframeMinDate = "20120203120530";
                timezone = 265389;
                timezonename = "praesentium";
            }};            

            AccountPostFormResponse res = sdk.account.accountPostForm(req);

            if (res.apiCoreDtoAccountingUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPostJson

Update current account data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPostJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingUser;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoAccountingUser req = new ApiCoreDtoAccountingUser() {{
                boGoVal = "voluptates";
                bonusClicks = 93940L;
                companyName = "repudiandae";
                companyRole = "sint";
                email = "Tobin0@gmail.com";
                firstName = "Marc";
                lastName = "Spinka";
                phone = "1-778-421-3550";
                redirectOnly = false;
                registrationDate = "20120203120530";
                timeframeMinDate = "20120203120530";
                timezone = 164940;
                timezonename = "assumenda";
            }};            

            AccountPostJsonResponse res = sdk.account.accountPostJson(req);

            if (res.apiCoreDtoAccountingUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPostRaw

Update current account data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPostRawResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingUser;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "alias".getBytes()            

            AccountPostRawResponse res = sdk.account.accountPostRaw(req);

            if (res.apiCoreDtoAccountingUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPutDomainWhitelistForm

Create an domain entry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPutDomainWhitelistFormResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingDomainWhitelistEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoAccountingDomainWhitelistEntry req = new ApiCoreDtoAccountingDomainWhitelistEntry() {{
                id = "a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66";
                name = "Tomas Friesen";
            }};            

            AccountPutDomainWhitelistFormResponse res = sdk.account.accountPutDomainWhitelistForm(req);

            if (res.apiCoreDtoAccountingDomainWhitelistEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPutDomainWhitelistJson

Create an domain entry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPutDomainWhitelistJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingDomainWhitelistEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoAccountingDomainWhitelistEntry req = new ApiCoreDtoAccountingDomainWhitelistEntry() {{
                id = "fb9ba88f-3a66-4997-874b-a4469b6e2141";
                name = "Derrick McLaughlin";
            }};            

            AccountPutDomainWhitelistJsonResponse res = sdk.account.accountPutDomainWhitelistJson(req);

            if (res.apiCoreDtoAccountingDomainWhitelistEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPutDomainWhitelistRaw

Create an domain entry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPutDomainWhitelistRawResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingDomainWhitelistEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "mollitia".getBytes()            

            AccountPutDomainWhitelistRawResponse res = sdk.account.accountPutDomainWhitelistRaw(req);

            if (res.apiCoreDtoAccountingDomainWhitelistEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPutGuestForm

Create a guest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPutGuestFormResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingConversionOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingExtendedGrants;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuest;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuestTimeFormatEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingHitOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoGrantsGrant;
import org.openapis.openapi.models.shared.ApiCoreResponsesEntityUriSystemInt64;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuest req = new ApiCoreDtoAccountingGuest() {{
                apiKey = "mollitia";
                conversionOptions = new ApiCoreDtoAccountingConversionOptions() {{
                    hideComCost = false;
                    hideCost = false;
                    hideCount = false;
                    hideParams = false;
                    hideValue = false;
                    percentCommission = 320997;
                    percentValue = 431418;
                }};;
                creationDate = "20120203120530";
                currentGrant = new ApiCoreDtoGrantsGrant() {{
                    datapointType = "dolor";
                    entity = new ApiCoreResponsesEntityUriSystemInt64() {{
                        id = 896547L;
                        uri = "http://handy-borrowing.info";
                    }};;
                    entityName = "doloribus";
                    entityType = "debitis";
                    type = "eius";
                }};;
                dateFormat = "maxime";
                decimalSeparator = "deleniti";
                email = "Isaias91@hotmail.com";
                extendedGrants = new ApiCoreDtoAccountingExtendedGrants() {{
                    allowAllGrants = false;
                    allowGroupCreation = false;
                }};;
                groupGrants = 352312L;
                hitOptions = new ApiCoreDtoAccountingHitOptions() {{
                    hideReferrer = false;
                }};;
                id = 714242L;
                key = "nihil";
                language = "repellat";
                loginCount = 841140;
                name = "Mr. Jenna Stroman";
                notes = "natus";
                numberGroupSeparator = "magni";
                password = "sunt";
                timeFormat = ApiCoreDtoAccountingGuestTimeFormatEnum.H24;
                timeZone = 848009;
                timeframeMinDate = "20120203120530";
                timezonename = "pariatur";
                tlGrants = 807319L;
                tpGrants = 411397L;
                userName = "Keven.Connelly";
            }};            

            AccountPutGuestFormResponse res = sdk.account.accountPutGuestForm(req);

            if (res.apiCoreDtoAccountingGuest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPutGuestJson

Create a guest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPutGuestJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingConversionOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingExtendedGrants;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuest;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuestTimeFormatEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingHitOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoGrantsGrant;
import org.openapis.openapi.models.shared.ApiCoreResponsesEntityUriSystemInt64;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuest req = new ApiCoreDtoAccountingGuest() {{
                apiKey = "maiores";
                conversionOptions = new ApiCoreDtoAccountingConversionOptions() {{
                    hideComCost = false;
                    hideCost = false;
                    hideCount = false;
                    hideParams = false;
                    hideValue = false;
                    percentCommission = 697429;
                    percentValue = 373291;
                }};;
                creationDate = "20120203120530";
                currentGrant = new ApiCoreDtoGrantsGrant() {{
                    datapointType = "voluptate";
                    entity = new ApiCoreResponsesEntityUriSystemInt64() {{
                        id = 420075L;
                        uri = "https://attractive-subtitle.info";
                    }};;
                    entityName = "voluptatibus";
                    entityType = "perferendis";
                    type = "fugiat";
                }};;
                dateFormat = "amet";
                decimalSeparator = "aut";
                email = "Floyd_Welch17@hotmail.com";
                extendedGrants = new ApiCoreDtoAccountingExtendedGrants() {{
                    allowAllGrants = false;
                    allowGroupCreation = false;
                }};;
                groupGrants = 339404L;
                hitOptions = new ApiCoreDtoAccountingHitOptions() {{
                    hideReferrer = false;
                }};;
                id = 521037L;
                key = "dignissimos";
                language = "eaque";
                loginCount = 338985;
                name = "Ruby Auer";
                notes = "quam";
                numberGroupSeparator = "dolor";
                password = "vero";
                timeFormat = ApiCoreDtoAccountingGuestTimeFormatEnum.AM_PM;
                timeZone = 944120;
                timeframeMinDate = "20120203120530";
                timezonename = "recusandae";
                tlGrants = 608253L;
                tpGrants = 704415L;
                userName = "Lauryn.Bartoletti50";
            }};            

            AccountPutGuestJsonResponse res = sdk.account.accountPutGuestJson(req);

            if (res.apiCoreDtoAccountingGuest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPutGuestRaw

Create a guest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPutGuestRawResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingConversionOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingExtendedGrants;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuest;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingGuestTimeFormatEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingHitOptions;
import org.openapis.openapi.models.shared.ApiCoreDtoGrantsGrant;
import org.openapis.openapi.models.shared.ApiCoreResponsesEntityUriSystemInt64;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "eaque".getBytes()            

            AccountPutGuestRawResponse res = sdk.account.accountPutGuestRaw(req);

            if (res.apiCoreDtoAccountingGuest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPutIpBlacklistForm

Create an ip blacklist entry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPutIpBlacklistFormResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingIpBlacklistEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoAccountingIpBlacklistEntry req = new ApiCoreDtoAccountingIpBlacklistEntry() {{
                id = "b3fe49a8-d9cb-4f48-a333-23f9b77f3a41";
                ip = "ipsa";
            }};            

            AccountPutIpBlacklistFormResponse res = sdk.account.accountPutIpBlacklistForm(req);

            if (res.apiCoreDtoAccountingIpBlacklistEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPutIpBlacklistJson

Create an ip blacklist entry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPutIpBlacklistJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingIpBlacklistEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoAccountingIpBlacklistEntry req = new ApiCoreDtoAccountingIpBlacklistEntry() {{
                id = "674ebf69-280d-41ba-b7a8-9ebf737ae420";
                ip = "amet";
            }};            

            AccountPutIpBlacklistJsonResponse res = sdk.account.accountPutIpBlacklistJson(req);

            if (res.apiCoreDtoAccountingIpBlacklistEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountPutIpBlacklistRaw

Create an ip blacklist entry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountPutIpBlacklistRawResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoAccountingIpBlacklistEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "accusamus".getBytes()            

            AccountPutIpBlacklistRawResponse res = sdk.account.accountPutIpBlacklistRaw(req);

            if (res.apiCoreDtoAccountingIpBlacklistEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAccountGuestsGuestIdTypePermissionsPatchForm

Change the permission on a shared object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAccountGuestsGuestIdTypePermissionsPatchFormRequest;
import org.openapis.openapi.models.operations.PostAccountGuestsGuestIdTypePermissionsPatchFormResponse;
import org.openapis.openapi.models.operations.PostAccountGuestsGuestIdTypePermissionsPatchFormTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreRequestsPermissionPatchRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAccountGuestsGuestIdTypePermissionsPatchFormRequest req = new PostAccountGuestsGuestIdTypePermissionsPatchFormRequest(                new ApiCoreRequestsPermissionPatchRequest() {{
                                action = "saepe";
                                id = 383464L;
                                verb = "deserunt";
                            }};, 588317L, PostAccountGuestsGuestIdTypePermissionsPatchFormTypeEnum.DATAPOINT);            

            PostAccountGuestsGuestIdTypePermissionsPatchFormResponse res = sdk.account.postAccountGuestsGuestIdTypePermissionsPatchForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAccountGuestsGuestIdTypePermissionsPatchJson

Change the permission on a shared object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAccountGuestsGuestIdTypePermissionsPatchJsonRequest;
import org.openapis.openapi.models.operations.PostAccountGuestsGuestIdTypePermissionsPatchJsonResponse;
import org.openapis.openapi.models.operations.PostAccountGuestsGuestIdTypePermissionsPatchJsonTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreRequestsPermissionPatchRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAccountGuestsGuestIdTypePermissionsPatchJsonRequest req = new PostAccountGuestsGuestIdTypePermissionsPatchJsonRequest(                new ApiCoreRequestsPermissionPatchRequest() {{
                                action = "totam";
                                id = 628982L;
                                verb = "alias";
                            }};, 872651L, PostAccountGuestsGuestIdTypePermissionsPatchJsonTypeEnum.DATAPOINT);            

            PostAccountGuestsGuestIdTypePermissionsPatchJsonResponse res = sdk.account.postAccountGuestsGuestIdTypePermissionsPatchJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAccountGuestsGuestIdTypePermissionsPatchRaw

Change the permission on a shared object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAccountGuestsGuestIdTypePermissionsPatchRawRequest;
import org.openapis.openapi.models.operations.PostAccountGuestsGuestIdTypePermissionsPatchRawResponse;
import org.openapis.openapi.models.operations.PostAccountGuestsGuestIdTypePermissionsPatchRawTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreRequestsPermissionPatchRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAccountGuestsGuestIdTypePermissionsPatchRawRequest req = new PostAccountGuestsGuestIdTypePermissionsPatchRawRequest("vel".getBytes(), 798047L, PostAccountGuestsGuestIdTypePermissionsPatchRawTypeEnum.GROUP);            

            PostAccountGuestsGuestIdTypePermissionsPatchRawResponse res = sdk.account.postAccountGuestsGuestIdTypePermissionsPatchRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
