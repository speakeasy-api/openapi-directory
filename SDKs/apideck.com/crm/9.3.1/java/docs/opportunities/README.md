# opportunities

### Available Operations

* [opportunitiesAdd](#opportunitiesadd) - Create opportunity
* [opportunitiesAll](#opportunitiesall) - List opportunities
* [opportunitiesDelete](#opportunitiesdelete) - Delete opportunity
* [opportunitiesOne](#opportunitiesone) - Get opportunity
* [opportunitiesUpdate](#opportunitiesupdate) - Update opportunity

## opportunitiesAdd

Create opportunity

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OpportunitiesAddRequest;
import org.openapis.openapi.models.operations.OpportunitiesAddResponse;
import org.openapis.openapi.models.operations.OpportunitiesAddSecurity;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.OpportunityInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OpportunitiesAddRequest req = new OpportunitiesAddRequest(                new OpportunityInput("12345", "New Rocket") {{
                                closeDate = LocalDate.parse("2020-10-30");
                                companyId = "12345";
                                companyName = "Copper";
                                contactId = "12345";
                                contactIds = new String[]{{
                                    add("12345"),
                                    add("12345"),
                                    add("12345"),
                                }};
                                currency = CurrencyEnum.USD;
                                customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = true;
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = true;
                                    }}),
                                }};
                                description = "Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.";
                                leadId = "12345";
                                leadSource = "Website";
                                lossReason = "No budget";
                                lossReasonId = "12345";
                                monetaryAmount = 75000;
                                ownerId = "12345";
                                pipelineId = "12345";
                                pipelineStageId = "12345";
                                priority = "None";
                                sourceId = "12345";
                                stageLastChangedAt = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                status = "Open";
                                statusId = "12345";
                                tags = new String[]{{
                                    add("accusantium"),
                                    add("mollitia"),
                                    add("reiciendis"),
                                }};
                                type = "Existing Customer - Upgrade";
                                winProbability = 40;
                                wonReason = "Best pitch";
                                wonReasonId = "12345";
                            }};, "mollitia", "ad") {{
                raw = false;
                xApideckServiceId = "eum";
            }};            

            OpportunitiesAddResponse res = sdk.opportunities.opportunitiesAdd(req, new OpportunitiesAddSecurity("dolor") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createOpportunityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## opportunitiesAll

List opportunities

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OpportunitiesAllRequest;
import org.openapis.openapi.models.operations.OpportunitiesAllResponse;
import org.openapis.openapi.models.operations.OpportunitiesAllSecurity;
import org.openapis.openapi.models.shared.OpportunitiesFilter;
import org.openapis.openapi.models.shared.OpportunitiesSort;
import org.openapis.openapi.models.shared.OpportunitiesSortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OpportunitiesAllRequest req = new OpportunitiesAllRequest("necessitatibus", "odit") {{
                cursor = "nemo";
                fields = "quasi";
                filter = new OpportunitiesFilter() {{
                    companyId = "1234";
                    monetaryAmount = 75000;
                    status = "Completed";
                    title = "Tesla deal";
                    winProbability = 50;
                }};;
                limit = 435865L;
                raw = false;
                sort = new OpportunitiesSort() {{
                    by = OpportunitiesSortByEnum.CREATED_AT;
                    direction = SortDirectionEnum.DESC;
                }};;
                xApideckServiceId = "debitis";
            }};            

            OpportunitiesAllResponse res = sdk.opportunities.opportunitiesAll(req, new OpportunitiesAllSecurity("eius") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getOpportunitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## opportunitiesDelete

Delete opportunity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OpportunitiesDeleteRequest;
import org.openapis.openapi.models.operations.OpportunitiesDeleteResponse;
import org.openapis.openapi.models.operations.OpportunitiesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OpportunitiesDeleteRequest req = new OpportunitiesDeleteRequest("maxime", "deleniti", "facilis") {{
                raw = false;
                xApideckServiceId = "in";
            }};            

            OpportunitiesDeleteResponse res = sdk.opportunities.opportunitiesDelete(req, new OpportunitiesDeleteSecurity("architecto") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteOpportunityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## opportunitiesOne

Get opportunity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OpportunitiesOneRequest;
import org.openapis.openapi.models.operations.OpportunitiesOneResponse;
import org.openapis.openapi.models.operations.OpportunitiesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OpportunitiesOneRequest req = new OpportunitiesOneRequest("architecto", "repudiandae", "ullam") {{
                fields = "expedita";
                raw = false;
                xApideckServiceId = "nihil";
            }};            

            OpportunitiesOneResponse res = sdk.opportunities.opportunitiesOne(req, new OpportunitiesOneSecurity("repellat") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getOpportunityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## opportunitiesUpdate

Update opportunity

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OpportunitiesUpdateRequest;
import org.openapis.openapi.models.operations.OpportunitiesUpdateResponse;
import org.openapis.openapi.models.operations.OpportunitiesUpdateSecurity;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.OpportunityInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OpportunitiesUpdateRequest req = new OpportunitiesUpdateRequest(                new OpportunityInput("12345", "New Rocket") {{
                                closeDate = LocalDate.parse("2020-10-30");
                                companyId = "12345";
                                companyName = "Copper";
                                contactId = "12345";
                                contactIds = new String[]{{
                                    add("12345"),
                                    add("12345"),
                                    add("12345"),
                                    add("12345"),
                                }};
                                currency = CurrencyEnum.USD;
                                customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = new String[]{{
                                            add("accusantium"),
                                            add("consequuntur"),
                                            add("praesentium"),
                                            add("natus"),
                                        }};
                                    }}),
                                }};
                                description = "Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.";
                                leadId = "12345";
                                leadSource = "Website";
                                lossReason = "No budget";
                                lossReasonId = "12345";
                                monetaryAmount = 75000;
                                ownerId = "12345";
                                pipelineId = "12345";
                                pipelineStageId = "12345";
                                priority = "None";
                                sourceId = "12345";
                                stageLastChangedAt = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                status = "Open";
                                statusId = "12345";
                                tags = new String[]{{
                                    add("sunt"),
                                }};
                                type = "Existing Customer - Upgrade";
                                winProbability = 40;
                                wonReason = "Best pitch";
                                wonReasonId = "12345";
                            }};, "quo", "illum", "pariatur") {{
                raw = false;
                xApideckServiceId = "maxime";
            }};            

            OpportunitiesUpdateResponse res = sdk.opportunities.opportunitiesUpdate(req, new OpportunitiesUpdateSecurity("ea") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateOpportunityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
