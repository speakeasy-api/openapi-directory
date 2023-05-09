# v1Company

## Overview

Company Search methods

### Available Operations

* [companyAlternativeSearch](#companyalternativesearch) - Retrieves a list of companies from the KYC API company index
* [companyAnnouncement](#companyannouncement) - Retrieves announcement data
* [companyDeepsearchISIN](#companydeepsearchisin) - Retrieves a list of stock exchange listings
* [companyDeepsearchLEI](#companydeepsearchlei) - Retrieves a list of companies
* [companyDeepsearchName](#companydeepsearchname) - Retrieves a list of companies from the official business register
* [companyDeepsearchNumber](#companydeepsearchnumber) - Retrieves a list of companies from the official business register
* [companyIdAnnouncements](#companyidannouncements) - Retrieves company announcements
* [companyIdDataset](#companyiddataset) - Retrieves company details
* [companyIdSuper](#companyidsuper) - Retrieves structured data extracted from a company document
* [companyMonitorChangeTypesList](#companymonitorchangetypeslist) - Get available ChangeTypes
* [companyMonitorId](#companymonitorid) - Get monitor status for specific company id
* [companyMonitorList](#companymonitorlist) - Retrieves a list of registered monitors
* [companyMonitorRegister](#companymonitorregister) - Register a Company for monitoring
* [companyMonitorUnregister](#companymonitorunregister) - Deactivates an active notification
* [companyNotificationId](#companynotificationid) - Retrieves a list of registered notifications
* [companyNotificationList](#companynotificationlist) - Retrieves a list of registered notifications
* [companyNotificationRegister](#companynotificationregister) - Creates a new notification
* [companyNotificationUnregister](#companynotificationunregister) - Unregister a company from Monitoring
* [companySearchName](#companysearchname) - Retrieves a list of companies from the KYC API company index
* [companySearchNumber](#companysearchnumber) - Retrieves a list of companies from the KYC API company index

## companyAlternativeSearch

KYC API company index lookup by country and mixed parameters. This function requires a country code then a mixture of name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequest;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequestBody;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchResponse;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyAlternativeSearchRequest req = new CompanyAlternativeSearchRequest("quis") {{
                requestBody = new CompanyAlternativeSearchRequestBody() {{
                    address = "60389 Connelly Trace";
                    name = "Emilio Krajcik";
                    number = "esse";
                    phone = "861-765-1597 x5144";
                    url = "modi";
                    vat = "qui";
                }};;
            }};            

            CompanyAlternativeSearchResponse res = sdk.v1Company.companyAlternativeSearch(req, new CompanyAlternativeSearchSecurity("impedit") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyAlternativeSearch200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyAnnouncement

Request full announcement data identified by announcement id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyAnnouncementRequest;
import org.openapis.openapi.models.operations.CompanyAnnouncementResponse;
import org.openapis.openapi.models.operations.CompanyAnnouncementSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyAnnouncementRequest req = new CompanyAnnouncementRequest("cum");            

            CompanyAnnouncementResponse res = sdk.v1Company.companyAnnouncement(req, new CompanyAnnouncementSecurity("esse") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyAnnouncement200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyDeepsearchISIN

Lookup stock exchange listings identified by an ISIN (International Securities Identification Number) number. Search is forwarded to a provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyDeepsearchISINRequestBody;
import org.openapis.openapi.models.operations.CompanyDeepsearchISINResponse;
import org.openapis.openapi.models.operations.CompanyDeepsearchISINSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyDeepsearchISINRequestBody req = new CompanyDeepsearchISINRequestBody() {{
                isin = "ipsum";
            }};            

            CompanyDeepsearchISINResponse res = sdk.v1Company.companyDeepsearchISIN(req, new CompanyDeepsearchISINSecurity("excepturi") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyDeepsearchISIN200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyDeepsearchLEI

Lookup companies identified by a LEI (Legal Entity Identifier) number. Search is forwarded to a provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyDeepsearchLEIRequest;
import org.openapis.openapi.models.operations.CompanyDeepsearchLEIResponse;
import org.openapis.openapi.models.operations.CompanyDeepsearchLEISecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyDeepsearchLEIRequest req = new CompanyDeepsearchLEIRequest("aspernatur") {{
                page = 18789;
            }};            

            CompanyDeepsearchLEIResponse res = sdk.v1Company.companyDeepsearchLEI(req, new CompanyDeepsearchLEISecurity("ad") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyDeepsearchLEI200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyDeepsearchName

Search for companies with a certain name. Search is forwarded to the respective business register of the country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyDeepsearchNameRequest;
import org.openapis.openapi.models.operations.CompanyDeepsearchNameResponse;
import org.openapis.openapi.models.operations.CompanyDeepsearchNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyDeepsearchNameRequest req = new CompanyDeepsearchNameRequest("natus", "sed");            

            CompanyDeepsearchNameResponse res = sdk.v1Company.companyDeepsearchName(req, new CompanyDeepsearchNameSecurity("iste") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyDeepsearchName200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyDeepsearchNumber

Search for companies with a certain register number. Search is forwarded to the respective business register of the country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyDeepsearchNumberRequest;
import org.openapis.openapi.models.operations.CompanyDeepsearchNumberResponse;
import org.openapis.openapi.models.operations.CompanyDeepsearchNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyDeepsearchNumberRequest req = new CompanyDeepsearchNumberRequest("dolor", "natus");            

            CompanyDeepsearchNumberResponse res = sdk.v1Company.companyDeepsearchNumber(req, new CompanyDeepsearchNumberSecurity("laboriosam") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyDeepsearchNumber200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyIdAnnouncements

Search announcements filed to the business register from a company identified by an id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyIdAnnouncementsRequest;
import org.openapis.openapi.models.operations.CompanyIdAnnouncementsResponse;
import org.openapis.openapi.models.operations.CompanyIdAnnouncementsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyIdAnnouncementsRequest req = new CompanyIdAnnouncementsRequest("hic") {{
                data = false;
                limit = 902599;
                offset = 681820;
            }};            

            CompanyIdAnnouncementsResponse res = sdk.v1Company.companyIdAnnouncements(req, new CompanyIdAnnouncementsSecurity("in") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyIdAnnouncements200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyIdDataset

Get company details by id. The level of details is defined by the dataset parameter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyIdDatasetDatasetEnum;
import org.openapis.openapi.models.operations.CompanyIdDatasetLangEnum;
import org.openapis.openapi.models.operations.CompanyIdDatasetRequest;
import org.openapis.openapi.models.operations.CompanyIdDatasetResponse;
import org.openapis.openapi.models.operations.CompanyIdDatasetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyIdDatasetRequest req = new CompanyIdDatasetRequest(CompanyIdDatasetDatasetEnum.MINI, "iste") {{
                checkStockListing = false;
                lang = CompanyIdDatasetLangEnum.EN;
            }};            

            CompanyIdDatasetResponse res = sdk.v1Company.companyIdDataset(req, new CompanyIdDatasetSecurity("saepe") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyIdSuper

Request company superdata identified by company id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyIdSuperLangEnum;
import org.openapis.openapi.models.operations.CompanyIdSuperRequest;
import org.openapis.openapi.models.operations.CompanyIdSuperResponse;
import org.openapis.openapi.models.operations.CompanyIdSuperSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyIdSuperRequest req = new CompanyIdSuperRequest("quidem", "architecto") {{
                lang = CompanyIdSuperLangEnum.UNKNOWN;
            }};            

            CompanyIdSuperResponse res = sdk.v1Company.companyIdSuper(req, new CompanyIdSuperSecurity("reiciendis") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyIdSuper200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyMonitorChangeTypesList

Get current list of available ChangeTypes to subscribe to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyMonitorChangeTypesListResponse;
import org.openapis.openapi.models.operations.CompanyMonitorChangeTypesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyMonitorChangeTypesListResponse res = sdk.v1Company.companyMonitorChangeTypesList(new CompanyMonitorChangeTypesListSecurity("est") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyMonitorChangeTypesList200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyMonitorId

Query status of registered monitors for a specific company identified by a company id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyMonitorIdRequest;
import org.openapis.openapi.models.operations.CompanyMonitorIdResponse;
import org.openapis.openapi.models.operations.CompanyMonitorIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyMonitorIdRequest req = new CompanyMonitorIdRequest("mollitia");            

            CompanyMonitorIdResponse res = sdk.v1Company.companyMonitorId(req, new CompanyMonitorIdSecurity("laborum") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyMonitorId200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyMonitorList

Query list of all registered monitors for logged in user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyMonitorListResponse;
import org.openapis.openapi.models.operations.CompanyMonitorListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyMonitorListResponse res = sdk.v1Company.companyMonitorList(new CompanyMonitorListSecurity("dolores") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyMonitorList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyMonitorRegister

Add a company to your perpetual monitoring list and register a callback URL to get monitoring alerts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyMonitorRegisterRequest;
import org.openapis.openapi.models.operations.CompanyMonitorRegisterRequestBody;
import org.openapis.openapi.models.operations.CompanyMonitorRegisterResponse;
import org.openapis.openapi.models.operations.CompanyMonitorRegisterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyMonitorRegisterRequest req = new CompanyMonitorRegisterRequest("dolorem") {{
                requestBody = new CompanyMonitorRegisterRequestBody("corporis", "explicabo");;
            }};            

            CompanyMonitorRegisterResponse res = sdk.v1Company.companyMonitorRegister(req, new CompanyMonitorRegisterSecurity("nobis") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyMonitorRegister200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyMonitorUnregister

Deactivate a previously registered company monitor identified by the notifier id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyMonitorUnregisterRequest;
import org.openapis.openapi.models.operations.CompanyMonitorUnregisterResponse;
import org.openapis.openapi.models.operations.CompanyMonitorUnregisterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyMonitorUnregisterRequest req = new CompanyMonitorUnregisterRequest("enim");            

            CompanyMonitorUnregisterResponse res = sdk.v1Company.companyMonitorUnregister(req, new CompanyMonitorUnregisterSecurity("omnis") {{
                userKey = "YOUR_API_KEY_HERE";
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

## companyNotificationId

Query list of registered notifications for a specific company identified by a company id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyNotificationIdRequest;
import org.openapis.openapi.models.operations.CompanyNotificationIdResponse;
import org.openapis.openapi.models.operations.CompanyNotificationIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyNotificationIdRequest req = new CompanyNotificationIdRequest("nemo");            

            CompanyNotificationIdResponse res = sdk.v1Company.companyNotificationId(req, new CompanyNotificationIdSecurity("minima") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyNotificationId200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyNotificationList

Query list of registered callback URLs for logged in user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyNotificationListResponse;
import org.openapis.openapi.models.operations.CompanyNotificationListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyNotificationListResponse res = sdk.v1Company.companyNotificationList(new CompanyNotificationListSecurity("excepturi") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyNotificationList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyNotificationRegister

Register a new callback URL to get notifications about companies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyNotificationRegisterRequest;
import org.openapis.openapi.models.operations.CompanyNotificationRegisterRequestBody;
import org.openapis.openapi.models.operations.CompanyNotificationRegisterResponse;
import org.openapis.openapi.models.operations.CompanyNotificationRegisterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyNotificationRegisterRequest req = new CompanyNotificationRegisterRequest("accusantium") {{
                requestBody = new CompanyNotificationRegisterRequestBody("iure");;
            }};            

            CompanyNotificationRegisterResponse res = sdk.v1Company.companyNotificationRegister(req, new CompanyNotificationRegisterSecurity("culpa") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyNotificationRegister200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyNotificationUnregister

Deactivate a previously registered company monitor identified by the notifier id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyNotificationUnregisterRequest;
import org.openapis.openapi.models.operations.CompanyNotificationUnregisterResponse;
import org.openapis.openapi.models.operations.CompanyNotificationUnregisterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyNotificationUnregisterRequest req = new CompanyNotificationUnregisterRequest("doloribus");            

            CompanyNotificationUnregisterResponse res = sdk.v1Company.companyNotificationUnregister(req, new CompanyNotificationUnregisterSecurity("sapiente") {{
                userKey = "YOUR_API_KEY_HERE";
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

## companySearchName

KYC API company index lookup for companies with a certain name in a country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanySearchNameRequest;
import org.openapis.openapi.models.operations.CompanySearchNameResponse;
import org.openapis.openapi.models.operations.CompanySearchNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanySearchNameRequest req = new CompanySearchNameRequest("architecto", "mollitia") {{
                limit = 208876L;
            }};            

            CompanySearchNameResponse res = sdk.v1Company.companySearchName(req, new CompanySearchNameSecurity("culpa") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companySearchName200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companySearchNumber

KYC API company index lookup for companies with a certain register number in a country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanySearchNumberRequest;
import org.openapis.openapi.models.operations.CompanySearchNumberResponse;
import org.openapis.openapi.models.operations.CompanySearchNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanySearchNumberRequest req = new CompanySearchNumberRequest("consequuntur", "repellat") {{
                limit = 653108L;
            }};            

            CompanySearchNumberResponse res = sdk.v1Company.companySearchNumber(req, new CompanySearchNumberSecurity("occaecati") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companySearchNumber200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
