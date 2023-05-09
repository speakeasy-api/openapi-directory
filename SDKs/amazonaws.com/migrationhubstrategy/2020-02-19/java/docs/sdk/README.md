# SDK

## Overview

<p><fullname>Migration Hub Strategy Recommendations</fullname> <p>This API reference provides descriptions, syntax, and other details about each of the actions and data types for Migration Hub Strategy Recommendations (Strategy Recommendations). The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/migrationhub-strategy/>
### Available Operations

* [getApplicationComponentDetails](#getapplicationcomponentdetails) -  Retrieves details about an application component. 
* [getApplicationComponentStrategies](#getapplicationcomponentstrategies) -  Retrieves a list of all the recommended strategies and tools for an application component running on a server. 
* [getAssessment](#getassessment) -  Retrieves the status of an on-going assessment. 
* [getImportFileTask](#getimportfiletask) -  Retrieves the details about a specific import task. 
* [getLatestAssessmentId](#getlatestassessmentid) - Retrieve the latest ID of a specific assessment task.
* [getPortfolioPreferences](#getportfoliopreferences) -  Retrieves your migration and modernization preferences. 
* [getPortfolioSummary](#getportfoliosummary) -  Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns. 
* [getRecommendationReportDetails](#getrecommendationreportdetails) -  Retrieves detailed information about the specified recommendation report. 
* [getServerDetails](#getserverdetails) -  Retrieves detailed information about a specified server. 
* [getServerStrategies](#getserverstrategies) -  Retrieves recommended strategies and tools for the specified server. 
* [listApplicationComponents](#listapplicationcomponents) -  Retrieves a list of all the application components (processes). 
* [listCollectors](#listcollectors) -  Retrieves a list of all the installed collectors. 
* [listImportFileTask](#listimportfiletask) -  Retrieves a list of all the imports performed. 
* [listServers](#listservers) -  Returns a list of all the servers. 
* [putPortfolioPreferences](#putportfoliopreferences) -  Saves the specified migration and modernization preferences. 
* [startAssessment](#startassessment) -  Starts the assessment of an on-premises environment. 
* [startImportFileTask](#startimportfiletask) -  Starts a file import. 
* [startRecommendationReportGeneration](#startrecommendationreportgeneration) -  Starts generating a recommendation report. 
* [stopAssessment](#stopassessment) -  Stops the assessment of an on-premises environment. 
* [updateApplicationComponentConfig](#updateapplicationcomponentconfig) -  Updates the configuration of an application component. 
* [updateServerConfig](#updateserverconfig) -  Updates the configuration of the specified server. 

## getApplicationComponentDetails

 Retrieves details about an application component. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationComponentDetailsRequest;
import org.openapis.openapi.models.operations.GetApplicationComponentDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApplicationComponentDetailsRequest req = new GetApplicationComponentDetailsRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            GetApplicationComponentDetailsResponse res = sdk.sdk.getApplicationComponentDetails(req);

            if (res.getApplicationComponentDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplicationComponentStrategies

 Retrieves a list of all the recommended strategies and tools for an application component running on a server. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationComponentStrategiesRequest;
import org.openapis.openapi.models.operations.GetApplicationComponentStrategiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApplicationComponentStrategiesRequest req = new GetApplicationComponentStrategiesRequest("molestiae") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            GetApplicationComponentStrategiesResponse res = sdk.sdk.getApplicationComponentStrategies(req);

            if (res.getApplicationComponentStrategiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssessment

 Retrieves the status of an on-going assessment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssessmentRequest;
import org.openapis.openapi.models.operations.GetAssessmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssessmentRequest req = new GetAssessmentRequest("ab") {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            GetAssessmentResponse res = sdk.sdk.getAssessment(req);

            if (res.getAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImportFileTask

 Retrieves the details about a specific import task. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImportFileTaskRequest;
import org.openapis.openapi.models.operations.GetImportFileTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImportFileTaskRequest req = new GetImportFileTaskRequest("odit") {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "at";
                xAmzCredential = "maiores";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "quod";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "esse";
            }};            

            GetImportFileTaskResponse res = sdk.sdk.getImportFileTask(req);

            if (res.getImportFileTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLatestAssessmentId

Retrieve the latest ID of a specific assessment task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestAssessmentIdRequest;
import org.openapis.openapi.models.operations.GetLatestAssessmentIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLatestAssessmentIdRequest req = new GetLatestAssessmentIdRequest() {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "dicta";
                xAmzDate = "nam";
                xAmzSecurityToken = "officia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "fugit";
            }};            

            GetLatestAssessmentIdResponse res = sdk.sdk.getLatestAssessmentId(req);

            if (res.getLatestAssessmentIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPortfolioPreferences

 Retrieves your migration and modernization preferences. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPortfolioPreferencesRequest;
import org.openapis.openapi.models.operations.GetPortfolioPreferencesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPortfolioPreferencesRequest req = new GetPortfolioPreferencesRequest() {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "optio";
                xAmzCredential = "totam";
                xAmzDate = "beatae";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "modi";
            }};            

            GetPortfolioPreferencesResponse res = sdk.sdk.getPortfolioPreferences(req);

            if (res.getPortfolioPreferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPortfolioSummary

 Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPortfolioSummaryRequest;
import org.openapis.openapi.models.operations.GetPortfolioSummaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPortfolioSummaryRequest req = new GetPortfolioSummaryRequest() {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "cum";
                xAmzCredential = "esse";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            GetPortfolioSummaryResponse res = sdk.sdk.getPortfolioSummary(req);

            if (res.getPortfolioSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecommendationReportDetails

 Retrieves detailed information about the specified recommendation report. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecommendationReportDetailsRequest;
import org.openapis.openapi.models.operations.GetRecommendationReportDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecommendationReportDetailsRequest req = new GetRecommendationReportDetailsRequest("natus") {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolor";
                xAmzDate = "natus";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "saepe";
            }};            

            GetRecommendationReportDetailsResponse res = sdk.sdk.getRecommendationReportDetails(req);

            if (res.getRecommendationReportDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServerDetails

 Retrieves detailed information about a specified server. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServerDetailsRequest;
import org.openapis.openapi.models.operations.GetServerDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServerDetailsRequest req = new GetServerDetailsRequest("in") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "iste";
                xAmzCredential = "iure";
                xAmzDate = "saepe";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "ipsa";
                maxResults = 969810L;
                nextToken = "est";
            }};            

            GetServerDetailsResponse res = sdk.sdk.getServerDetails(req);

            if (res.getServerDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServerStrategies

 Retrieves recommended strategies and tools for the specified server. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServerStrategiesRequest;
import org.openapis.openapi.models.operations.GetServerStrategiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServerStrategiesRequest req = new GetServerStrategiesRequest("laborum") {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            GetServerStrategiesResponse res = sdk.sdk.getServerStrategies(req);

            if (res.getServerStrategiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplicationComponents

 Retrieves a list of all the application components (processes). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationComponentsRequest;
import org.openapis.openapi.models.operations.ListApplicationComponentsRequestBody;
import org.openapis.openapi.models.operations.ListApplicationComponentsRequestBodyApplicationComponentCriteriaEnum;
import org.openapis.openapi.models.operations.ListApplicationComponentsRequestBodySortEnum;
import org.openapis.openapi.models.operations.ListApplicationComponentsResponse;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.GroupNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationComponentsRequest req = new ListApplicationComponentsRequest(                new ListApplicationComponentsRequestBody() {{
                                applicationComponentCriteria = ListApplicationComponentsRequestBodyApplicationComponentCriteriaEnum.SERVER_ID;
                                filterValue = "excepturi";
                                groupIdFilter = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{
                                        name = GroupNameEnum.EXTERNAL_ID;
                                        value = "culpa";
                                    }}),
                                }};
                                maxResults = 988374L;
                                nextToken = "sapiente";
                                sort = ListApplicationComponentsRequestBodySortEnum.ASC;
                            }};) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "occaecati";
                maxResults = "numquam";
                nextToken = "commodi";
            }};            

            ListApplicationComponentsResponse res = sdk.sdk.listApplicationComponents(req);

            if (res.listApplicationComponentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCollectors

 Retrieves a list of all the installed collectors. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCollectorsRequest;
import org.openapis.openapi.models.operations.ListCollectorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCollectorsRequest req = new ListCollectorsRequest() {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
                maxResults = 656330L;
                nextToken = "enim";
            }};            

            ListCollectorsResponse res = sdk.sdk.listCollectors(req);

            if (res.listCollectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImportFileTask

 Retrieves a list of all the imports performed. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImportFileTaskRequest;
import org.openapis.openapi.models.operations.ListImportFileTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImportFileTaskRequest req = new ListImportFileTaskRequest() {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
                maxResults = 97101L;
                nextToken = "error";
            }};            

            ListImportFileTaskResponse res = sdk.sdk.listImportFileTask(req);

            if (res.listImportFileTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServers

 Returns a list of all the servers. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServersRequest;
import org.openapis.openapi.models.operations.ListServersRequestBody;
import org.openapis.openapi.models.operations.ListServersRequestBodyServerCriteriaEnum;
import org.openapis.openapi.models.operations.ListServersRequestBodySortEnum;
import org.openapis.openapi.models.operations.ListServersResponse;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.GroupNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServersRequest req = new ListServersRequest(                new ListServersRequestBody() {{
                                filterValue = "laborum";
                                groupIdFilter = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{
                                        name = GroupNameEnum.EXTERNAL_SOURCE_TYPE;
                                        value = "voluptatibus";
                                    }}),
                                }};
                                maxResults = 878194L;
                                nextToken = "nihil";
                                serverCriteria = ListServersRequestBodyServerCriteriaEnum.DESTINATION;
                                sort = ListServersRequestBodySortEnum.DESC;
                            }};) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
                maxResults = "ut";
                nextToken = "maiores";
            }};            

            ListServersResponse res = sdk.sdk.listServers(req);

            if (res.listServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPortfolioPreferences

 Saves the specified migration and modernization preferences. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPortfolioPreferencesRequest;
import org.openapis.openapi.models.operations.PutPortfolioPreferencesRequestBody;
import org.openapis.openapi.models.operations.PutPortfolioPreferencesRequestBodyApplicationModeEnum;
import org.openapis.openapi.models.operations.PutPortfolioPreferencesRequestBodyApplicationPreferences;
import org.openapis.openapi.models.operations.PutPortfolioPreferencesRequestBodyDatabasePreferences;
import org.openapis.openapi.models.operations.PutPortfolioPreferencesRequestBodyPrioritizeBusinessGoals;
import org.openapis.openapi.models.operations.PutPortfolioPreferencesResponse;
import org.openapis.openapi.models.shared.AwsManagedResources;
import org.openapis.openapi.models.shared.AwsManagedTargetDestinationEnum;
import org.openapis.openapi.models.shared.BusinessGoals;
import org.openapis.openapi.models.shared.DatabaseManagementPreferenceEnum;
import org.openapis.openapi.models.shared.DatabaseMigrationPreference;
import org.openapis.openapi.models.shared.Heterogeneous;
import org.openapis.openapi.models.shared.HeterogeneousTargetDatabaseEngineEnum;
import org.openapis.openapi.models.shared.Homogeneous;
import org.openapis.openapi.models.shared.HomogeneousTargetDatabaseEngineEnum;
import org.openapis.openapi.models.shared.ManagementPreference;
import org.openapis.openapi.models.shared.NoDatabaseMigrationPreference;
import org.openapis.openapi.models.shared.NoManagementPreference;
import org.openapis.openapi.models.shared.NoPreferenceTargetDestinationEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelfManageResources;
import org.openapis.openapi.models.shared.SelfManageTargetDestinationEnum;
import org.openapis.openapi.models.shared.TargetDatabaseEngineEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutPortfolioPreferencesRequest req = new PutPortfolioPreferencesRequest(                new PutPortfolioPreferencesRequestBody() {{
                                applicationMode = PutPortfolioPreferencesRequestBodyApplicationModeEnum.KNOWN;
                                applicationPreferences = new PutPortfolioPreferencesRequestBodyApplicationPreferences() {{
                                    managementPreference = new ManagementPreference() {{
                                        awsManagedResources = new AwsManagedResources(                new org.openapis.openapi.models.shared.AwsManagedTargetDestinationEnum[]{{
                                                            add(AwsManagedTargetDestinationEnum.AWS_ELASTIC_BEAN_STALK),
                                                            add(AwsManagedTargetDestinationEnum.NONE_SPECIFIED),
                                                        }});;
                                        noPreference = new NoManagementPreference(                new org.openapis.openapi.models.shared.NoPreferenceTargetDestinationEnum[]{{
                                                            add(NoPreferenceTargetDestinationEnum.AWS_ELASTIC_BEAN_STALK),
                                                            add(NoPreferenceTargetDestinationEnum.AMAZON_ELASTIC_KUBERNETES_SERVICE_EKS),
                                                            add(NoPreferenceTargetDestinationEnum.AWS_FARGATE),
                                                        }});;
                                        selfManageResources = new SelfManageResources(                new org.openapis.openapi.models.shared.SelfManageTargetDestinationEnum[]{{
                                                            add(SelfManageTargetDestinationEnum.NONE_SPECIFIED),
                                                            add(SelfManageTargetDestinationEnum.NONE_SPECIFIED),
                                                            add(SelfManageTargetDestinationEnum.AMAZON_ELASTIC_CONTAINER_SERVICE_ECS),
                                                            add(SelfManageTargetDestinationEnum.AMAZON_ELASTIC_CONTAINER_SERVICE_ECS),
                                                        }});;
                                    }};;
                                }};;
                                databasePreferences = new PutPortfolioPreferencesRequestBodyDatabasePreferences() {{
                                    databaseManagementPreference = DatabaseManagementPreferenceEnum.SELF_MANAGE;
                                    databaseMigrationPreference = new DatabaseMigrationPreference() {{
                                        heterogeneous = new Heterogeneous(                new org.openapis.openapi.models.shared.HeterogeneousTargetDatabaseEngineEnum[]{{
                                                            add(HeterogeneousTargetDatabaseEngineEnum.AWS_POSTGRE_SQL),
                                                            add(HeterogeneousTargetDatabaseEngineEnum.ORACLE_DATABASE),
                                                            add(HeterogeneousTargetDatabaseEngineEnum.ORACLE_DATABASE),
                                                            add(HeterogeneousTargetDatabaseEngineEnum.MONGO_DB),
                                                        }});;
                                        homogeneous = new Homogeneous() {{
                                            targetDatabaseEngine = new org.openapis.openapi.models.shared.HomogeneousTargetDatabaseEngineEnum[]{{
                                                add(HomogeneousTargetDatabaseEngineEnum.NONE_SPECIFIED),
                                            }};
                                        }};;
                                        noPreference = new NoDatabaseMigrationPreference(                new org.openapis.openapi.models.shared.TargetDatabaseEngineEnum[]{{
                                                            add(TargetDatabaseEngineEnum.ORACLE_DATABASE),
                                                            add(TargetDatabaseEngineEnum.NONE_SPECIFIED),
                                                            add(TargetDatabaseEngineEnum.MONGO_DB),
                                                            add(TargetDatabaseEngineEnum.AWS_POSTGRE_SQL),
                                                        }});;
                                    }};;
                                }};;
                                prioritizeBusinessGoals = new PutPortfolioPreferencesRequestBodyPrioritizeBusinessGoals() {{
                                    businessGoals = new BusinessGoals() {{
                                        licenseCostReduction = 318569L;
                                        modernizeInfrastructureWithCloudNativeTechnologies = 9356L;
                                        reduceOperationalOverheadWithManagedServices = 667411L;
                                        speedOfMigration = 842342L;
                                    }};;
                                }};;
                            }};) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "labore";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            PutPortfolioPreferencesResponse res = sdk.sdk.putPortfolioPreferences(req);

            if (res.putPortfolioPreferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startAssessment

 Starts the assessment of an on-premises environment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartAssessmentRequest;
import org.openapis.openapi.models.operations.StartAssessmentRequestBody;
import org.openapis.openapi.models.operations.StartAssessmentResponse;
import org.openapis.openapi.models.shared.AssessmentTarget;
import org.openapis.openapi.models.shared.ConditionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartAssessmentRequest req = new StartAssessmentRequest(                new StartAssessmentRequestBody() {{
                                assessmentTargets = new org.openapis.openapi.models.shared.AssessmentTarget[]{{
                                    add(new AssessmentTarget(ConditionEnum.CONTAINS, "labore",                 new String[]{{
                                                        add("eum"),
                                                        add("non"),
                                                        add("eligendi"),
                                                        add("sint"),
                                                    }}) {{
                                        condition = ConditionEnum.CONTAINS;
                                        name = "Louise Simonis Sr.";
                                        values = new String[]{{
                                            add("excepturi"),
                                            add("tempora"),
                                            add("facilis"),
                                        }};
                                    }}),
                                    add(new AssessmentTarget(ConditionEnum.NOT_CONTAINS, "maiores",                 new String[]{{
                                                        add("dicta"),
                                                        add("magnam"),
                                                        add("cumque"),
                                                    }}) {{
                                        condition = ConditionEnum.NOT_EQUALS;
                                        name = "Terence Marquardt";
                                        values = new String[]{{
                                            add("a"),
                                            add("dolorum"),
                                            add("in"),
                                            add("in"),
                                        }};
                                    }}),
                                    add(new AssessmentTarget(ConditionEnum.CONTAINS, "provident",                 new String[]{{
                                                        add("id"),
                                                        add("blanditiis"),
                                                        add("deleniti"),
                                                    }}) {{
                                        condition = ConditionEnum.NOT_CONTAINS;
                                        name = "Beth Padberg";
                                        values = new String[]{{
                                            add("enim"),
                                            add("accusamus"),
                                            add("delectus"),
                                        }};
                                    }}),
                                }};
                                s3bucketForAnalysisData = "sapiente";
                                s3bucketForReportData = "amet";
                            }};) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "vel";
                xAmzDate = "natus";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "perferendis";
            }};            

            StartAssessmentResponse res = sdk.sdk.startAssessment(req);

            if (res.startAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startImportFileTask

 Starts a file import. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartImportFileTaskRequest;
import org.openapis.openapi.models.operations.StartImportFileTaskRequestBody;
import org.openapis.openapi.models.operations.StartImportFileTaskRequestBodyDataSourceTypeEnum;
import org.openapis.openapi.models.operations.StartImportFileTaskResponse;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.GroupNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartImportFileTaskRequest req = new StartImportFileTaskRequest(                new StartImportFileTaskRequestBody("magnam", "distinctio", "id") {{
                                dataSourceType = StartImportFileTaskRequestBodyDataSourceTypeEnum.APPLICATION_DISCOVERY_SERVICE;
                                groupId = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{
                                        name = GroupNameEnum.EXTERNAL_ID;
                                        value = "natus";
                                    }}),
                                    add(new Group() {{
                                        name = GroupNameEnum.EXTERNAL_SOURCE_TYPE;
                                        value = "eum";
                                    }}),
                                }};
                                s3bucketForReportData = "vero";
                            }};) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            StartImportFileTaskResponse res = sdk.sdk.startImportFileTask(req);

            if (res.startImportFileTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startRecommendationReportGeneration

 Starts generating a recommendation report. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartRecommendationReportGenerationRequest;
import org.openapis.openapi.models.operations.StartRecommendationReportGenerationRequestBody;
import org.openapis.openapi.models.operations.StartRecommendationReportGenerationRequestBodyOutputFormatEnum;
import org.openapis.openapi.models.operations.StartRecommendationReportGenerationResponse;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.GroupNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartRecommendationReportGenerationRequest req = new StartRecommendationReportGenerationRequest(                new StartRecommendationReportGenerationRequestBody() {{
                                groupIdFilter = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{
                                        name = GroupNameEnum.EXTERNAL_ID;
                                        value = "mollitia";
                                    }}),
                                    add(new Group() {{
                                        name = GroupNameEnum.EXTERNAL_SOURCE_TYPE;
                                        value = "mollitia";
                                    }}),
                                    add(new Group() {{
                                        name = GroupNameEnum.EXTERNAL_ID;
                                        value = "eum";
                                    }}),
                                }};
                                outputFormat = StartRecommendationReportGenerationRequestBodyOutputFormatEnum.EXCEL;
                            }};) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "odit";
                xAmzCredential = "nemo";
                xAmzDate = "quasi";
                xAmzSecurityToken = "iure";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "debitis";
            }};            

            StartRecommendationReportGenerationResponse res = sdk.sdk.startRecommendationReportGeneration(req);

            if (res.startRecommendationReportGenerationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopAssessment

 Stops the assessment of an on-premises environment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopAssessmentRequest;
import org.openapis.openapi.models.operations.StopAssessmentRequestBody;
import org.openapis.openapi.models.operations.StopAssessmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopAssessmentRequest req = new StopAssessmentRequest(                new StopAssessmentRequestBody("maxime");) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "in";
                xAmzDate = "architecto";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "ullam";
            }};            

            StopAssessmentResponse res = sdk.sdk.stopAssessment(req);

            if (res.stopAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApplicationComponentConfig

 Updates the configuration of an application component. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationComponentConfigRequest;
import org.openapis.openapi.models.operations.UpdateApplicationComponentConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateApplicationComponentConfigRequestBodyAppTypeEnum;
import org.openapis.openapi.models.operations.UpdateApplicationComponentConfigRequestBodyInclusionStatusEnum;
import org.openapis.openapi.models.operations.UpdateApplicationComponentConfigRequestBodyStrategyOption;
import org.openapis.openapi.models.operations.UpdateApplicationComponentConfigResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceCode;
import org.openapis.openapi.models.shared.StrategyEnum;
import org.openapis.openapi.models.shared.TargetDestinationEnum;
import org.openapis.openapi.models.shared.TransformationToolNameEnum;
import org.openapis.openapi.models.shared.VersionControlEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationComponentConfigRequest req = new UpdateApplicationComponentConfigRequest(                new UpdateApplicationComponentConfigRequestBody("nihil") {{
                                appType = UpdateApplicationComponentConfigRequestBodyAppTypeEnum.DOTNET;
                                configureOnly = false;
                                inclusionStatus = UpdateApplicationComponentConfigRequestBodyInclusionStatusEnum.INCLUDE_IN_ASSESSMENT;
                                secretsManagerKey = "sed";
                                sourceCodeList = new org.openapis.openapi.models.shared.SourceCode[]{{
                                    add(new SourceCode() {{
                                        location = "pariatur";
                                        projectName = "accusantium";
                                        sourceVersion = "consequuntur";
                                        versionControl = VersionControlEnum.GITHUB_ENTERPRISE;
                                    }}),
                                    add(new SourceCode() {{
                                        location = "natus";
                                        projectName = "magni";
                                        sourceVersion = "sunt";
                                        versionControl = VersionControlEnum.AZURE_DEVOPS_GIT;
                                    }}),
                                    add(new SourceCode() {{
                                        location = "illum";
                                        projectName = "pariatur";
                                        sourceVersion = "maxime";
                                        versionControl = VersionControlEnum.GITHUB_ENTERPRISE;
                                    }}),
                                    add(new SourceCode() {{
                                        location = "excepturi";
                                        projectName = "odit";
                                        sourceVersion = "ea";
                                        versionControl = VersionControlEnum.GITHUB;
                                    }}),
                                }};
                                strategyOption = new UpdateApplicationComponentConfigRequestBodyStrategyOption() {{
                                    isPreferred = false;
                                    strategy = StrategyEnum.REHOST;
                                    targetDestination = TargetDestinationEnum.BABELFISH_FOR_AURORA_POSTGRE_SQL;
                                    toolName = TransformationToolNameEnum.IN_PLACE_OPERATING_SYSTEM_UPGRADE;
                                }};;
                            }};) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "autem";
                xAmzDate = "nam";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "nemo";
            }};            

            UpdateApplicationComponentConfigResponse res = sdk.sdk.updateApplicationComponentConfig(req);

            if (res.updateApplicationComponentConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServerConfig

 Updates the configuration of the specified server. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServerConfigRequest;
import org.openapis.openapi.models.operations.UpdateServerConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateServerConfigRequestBodyStrategyOption;
import org.openapis.openapi.models.operations.UpdateServerConfigResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StrategyEnum;
import org.openapis.openapi.models.shared.TargetDestinationEnum;
import org.openapis.openapi.models.shared.TransformationToolNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServerConfigRequest req = new UpdateServerConfigRequest(                new UpdateServerConfigRequestBody("perferendis") {{
                                strategyOption = new UpdateServerConfigRequestBodyStrategyOption() {{
                                    isPreferred = false;
                                    strategy = StrategyEnum.RELOCATE;
                                    targetDestination = TargetDestinationEnum.AMAZON_ELASTIC_CLOUD_COMPUTE_EC2;
                                    toolName = TransformationToolNameEnum.APP2_CONTAINER;
                                }};;
                            }};) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "hic";
                xAmzDate = "libero";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "quis";
            }};            

            UpdateServerConfigResponse res = sdk.sdk.updateServerConfig(req);

            if (res.updateServerConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
