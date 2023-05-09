# SDK

## Overview

Amazon Web Services Mainframe Modernization provides tools and resources to help you plan and implement migration and modernization from mainframes to Amazon Web Services managed runtime environments. It provides tools for analyzing existing mainframe applications, developing or updating mainframe applications using COBOL or PL/I, and implementing an automated pipeline for continuous integration and continuous delivery (CI/CD) of the applications.

Amazon Web Services documentation
<https://docs.aws.amazon.com/m2/>
### Available Operations

* [cancelBatchJobExecution](#cancelbatchjobexecution) - Cancels the running of a specific batch job execution.
* [createApplication](#createapplication) - Creates a new application with given parameters. Requires an existing runtime environment and application definition file.
* [createDataSetImportTask](#createdatasetimporttask) - Starts a data set import task for a specific application.
* [createDeployment](#createdeployment) - Creates and starts a deployment to deploy an application into a runtime environment.
* [createEnvironment](#createenvironment) - Creates a runtime environment for a given runtime engine.
* [deleteApplication](#deleteapplication) - Deletes a specific application. You cannot delete a running application.
* [deleteApplicationFromEnvironment](#deleteapplicationfromenvironment) - Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.
* [deleteEnvironment](#deleteenvironment) - Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.
* [getApplication](#getapplication) - Describes the details of a specific application.
* [getApplicationVersion](#getapplicationversion) - Returns details about a specific version of a specific application.
* [getBatchJobExecution](#getbatchjobexecution) - Gets the details of a specific batch job execution for a specific application.
* [getDataSetDetails](#getdatasetdetails) - Gets the details of a specific data set.
* [getDataSetImportTask](#getdatasetimporttask) - Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.
* [getDeployment](#getdeployment) - Gets details of a specific deployment with a given deployment identifier.
* [getEnvironment](#getenvironment) - Describes a specific runtime environment.
* [listApplicationVersions](#listapplicationversions) - Returns a list of the application versions for a specific application.
* [listApplications](#listapplications) - Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.
* [listBatchJobDefinitions](#listbatchjobdefinitions) - Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.
* [listBatchJobExecutions](#listbatchjobexecutions) - Lists historical, current, and scheduled batch job executions for a specific application.
* [listDataSetImportHistory](#listdatasetimporthistory) - Lists the data set imports for the specified application.
* [listDataSets](#listdatasets) - Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.
* [listDeployments](#listdeployments) - Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.
* [listEngineVersions](#listengineversions) - Lists the available engine versions.
* [listEnvironments](#listenvironments) - Lists the runtime environments.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [startApplication](#startapplication) - Starts an application that is currently stopped.
* [startBatchJob](#startbatchjob) - Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.
* [stopApplication](#stopapplication) - Stops a running application.
* [tagResource](#tagresource) - Adds one or more tags to the specified resource.
* [untagResource](#untagresource) - Removes one or more tags from the specified resource.
* [updateApplication](#updateapplication) - Updates an application and creates a new version.
* [updateEnvironment](#updateenvironment) - Updates the configuration details for a specific runtime environment.

## cancelBatchJobExecution

Cancels the running of a specific batch job execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelBatchJobExecutionRequest;
import org.openapis.openapi.models.operations.CancelBatchJobExecutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelBatchJobExecutionRequest req = new CancelBatchJobExecutionRequest("suscipit", "iure") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            CancelBatchJobExecutionResponse res = sdk.sdk.cancelBatchJobExecution(req);

            if (res.cancelBatchJobExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApplication

Creates a new application with given parameters. Requires an existing runtime environment and application definition file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyDefinition;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyEngineTypeEnum;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequestBody(                new CreateApplicationRequestBodyDefinition() {{
                                                content = "placeat";
                                                s3Location = "voluptatum";
                                            }};, CreateApplicationRequestBodyEngineTypeEnum.MICROFOCUS, "excepturi") {{
                                clientToken = "nisi";
                                description = "recusandae";
                                kmsKeyId = "temporibus";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quis", "veritatis");
                                }};
                            }};) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            CreateApplicationResponse res = sdk.sdk.createApplication(req);

            if (res.createApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataSetImportTask

Starts a data set import task for a specific application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataSetImportTaskRequest;
import org.openapis.openapi.models.operations.CreateDataSetImportTaskRequestBody;
import org.openapis.openapi.models.operations.CreateDataSetImportTaskRequestBodyImportConfig;
import org.openapis.openapi.models.operations.CreateDataSetImportTaskResponse;
import org.openapis.openapi.models.shared.AlternateKey;
import org.openapis.openapi.models.shared.DataSet;
import org.openapis.openapi.models.shared.DataSetImportItem;
import org.openapis.openapi.models.shared.DatasetOrgAttributes;
import org.openapis.openapi.models.shared.ExternalLocation;
import org.openapis.openapi.models.shared.GdgAttributes;
import org.openapis.openapi.models.shared.PrimaryKey;
import org.openapis.openapi.models.shared.RecordLength;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VsamAttributes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataSetImportTaskRequest req = new CreateDataSetImportTaskRequest(                new CreateDataSetImportTaskRequestBody(                new CreateDataSetImportTaskRequestBodyImportConfig() {{
                                                dataSets = new org.openapis.openapi.models.shared.DataSetImportItem[]{{
                                                    add(new DataSetImportItem(                new DataSet("ut",                 new DatasetOrgAttributes() {{
                                                                                        gdg = new GdgAttributes() {{
                                                                                            limit = 979587L;
                                                                                            rollDisposition = "dicta";
                                                                                        }};;
                                                                                        vsam = new VsamAttributes("corporis") {{
                                                                                            alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                                                add(new AlternateKey(64147L, 216822L) {{
                                                                                                    allowDuplicates = false;
                                                                                                    length = 480894L;
                                                                                                    name = "Maryann Hamill";
                                                                                                    offset = 918236L;
                                                                                                }}),
                                                                                                add(new AlternateKey(916723L, 93940L) {{
                                                                                                    allowDuplicates = false;
                                                                                                    length = 692472L;
                                                                                                    name = "Andy Streich";
                                                                                                    offset = 523248L;
                                                                                                }}),
                                                                                            }};
                                                                                            compressed = false;
                                                                                            encoding = "repudiandae";
                                                                                            primaryKey = new PrimaryKey(575947L, 83112L) {{
                                                                                                name = "Miss Randall Hamill";
                                                                                            }};;
                                                                                        }};;
                                                                                    }};,                 new RecordLength(131797L, 647174L);) {{
                                                                        relativePath = "distinctio";
                                                                        storageType = "quibusdam";
                                                                    }};,                 new ExternalLocation() {{
                                                                        s3Location = "labore";
                                                                    }};) {{
                                                        dataSet = new DataSet("excepturi",                 new DatasetOrgAttributes() {{
                                                                            gdg = new GdgAttributes() {{
                                                                                limit = 38425L;
                                                                                rollDisposition = "iure";
                                                                            }};;
                                                                            vsam = new VsamAttributes("culpa") {{
                                                                                alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                                    add(new AlternateKey(653108L, 581850L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 958950L;
                                                                                        name = "Angie Durgan";
                                                                                        offset = 995300L;
                                                                                    }}),
                                                                                    add(new AlternateKey(338007L, 110375L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 253291L;
                                                                                        name = "Claudia Krajcik";
                                                                                        offset = 158969L;
                                                                                    }}),
                                                                                    add(new AlternateKey(368725L, 662527L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 674752L;
                                                                                        name = "Bill Conn";
                                                                                        offset = 949572L;
                                                                                    }}),
                                                                                    add(new AlternateKey(971945L, 976460L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 820994L;
                                                                                        name = "Joyce Mueller";
                                                                                        offset = 96098L;
                                                                                    }}),
                                                                                }};
                                                                                compressed = false;
                                                                                encoding = "vero";
                                                                                primaryKey = new PrimaryKey(468651L, 509624L) {{
                                                                                    name = "Jose Moen";
                                                                                }};;
                                                                            }};;
                                                                        }};,                 new RecordLength(19987L, 39187L);) {{
                                                            datasetName = "maiores";
                                                            datasetOrg = new DatasetOrgAttributes() {{
                                                                gdg = new GdgAttributes() {{
                                                                    limit = 473608L;
                                                                    rollDisposition = "quod";
                                                                }};
                                                                vsam = new VsamAttributes("corporis") {{
                                                                    alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                        add(new AlternateKey(143353L, 537373L) {{
                                                                            allowDuplicates = false;
                                                                            length = 461479L;
                                                                            name = "Miss Lowell Parisian";
                                                                            offset = 582020L;
                                                                        }}),
                                                                        add(new AlternateKey(186332L, 774234L) {{
                                                                            allowDuplicates = false;
                                                                            length = 944669L;
                                                                            name = "Everett Breitenberg";
                                                                            offset = 264555L;
                                                                        }}),
                                                                        add(new AlternateKey(149675L, 612096L) {{
                                                                            allowDuplicates = false;
                                                                            length = 736918L;
                                                                            name = "Edna Mante II";
                                                                            offset = 617636L;
                                                                        }}),
                                                                        add(new AlternateKey(359508L, 613064L) {{
                                                                            allowDuplicates = false;
                                                                            length = 222321L;
                                                                            name = "Lester Welch";
                                                                            offset = 449950L;
                                                                        }}),
                                                                    }};
                                                                    compressed = false;
                                                                    encoding = "iure";
                                                                    format = "saepe";
                                                                    primaryKey = new PrimaryKey(170909L, 210382L) {{
                                                                        length = 697631L;
                                                                        name = "Brenda Wisozk";
                                                                        offset = 670638L;
                                                                    }};
                                                                }};
                                                            }};
                                                            recordLength = new RecordLength(315428L, 607831L) {{
                                                                max = 128926L;
                                                                min = 750686L;
                                                            }};
                                                            relativePath = "nemo";
                                                            storageType = "minima";
                                                        }};
                                                        externalLocation = new ExternalLocation() {{
                                                            s3Location = "reprehenderit";
                                                        }};
                                                    }}),
                                                    add(new DataSetImportItem(                new DataSet("quasi",                 new DatasetOrgAttributes() {{
                                                                                        gdg = new GdgAttributes() {{
                                                                                            limit = 435865L;
                                                                                            rollDisposition = "doloribus";
                                                                                        }};;
                                                                                        vsam = new VsamAttributes("debitis") {{
                                                                                            alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                                                add(new AlternateKey(714242L, 469249L) {{
                                                                                                    allowDuplicates = false;
                                                                                                    length = 806194L;
                                                                                                    name = "Mr. Andres King";
                                                                                                    offset = 352312L;
                                                                                                }}),
                                                                                                add(new AlternateKey(615560L, 166847L) {{
                                                                                                    allowDuplicates = false;
                                                                                                    length = 998848L;
                                                                                                    name = "Louis Turner Sr.";
                                                                                                    offset = 508315L;
                                                                                                }}),
                                                                                            }};
                                                                                            compressed = false;
                                                                                            encoding = "sunt";
                                                                                            primaryKey = new PrimaryKey(779051L, 848009L) {{
                                                                                                name = "Simon Jenkins";
                                                                                            }};;
                                                                                        }};;
                                                                                    }};,                 new RecordLength(407183L, 33222L);) {{
                                                                        relativePath = "ab";
                                                                        storageType = "maiores";
                                                                    }};,                 new ExternalLocation() {{
                                                                        s3Location = "quidem";
                                                                    }};) {{
                                                        dataSet = new DataSet("provident",                 new DatasetOrgAttributes() {{
                                                                            gdg = new GdgAttributes() {{
                                                                                limit = 725255L;
                                                                                rollDisposition = "id";
                                                                            }};;
                                                                            vsam = new VsamAttributes("blanditiis") {{
                                                                                alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                                    add(new AlternateKey(474867L, 19193L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 956084L;
                                                                                        name = "Sandy Huels";
                                                                                        offset = 606393L;
                                                                                    }}),
                                                                                    add(new AlternateKey(618016L, 749170L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 470132L;
                                                                                        name = "Verna Olson";
                                                                                        offset = 383462L;
                                                                                    }}),
                                                                                    add(new AlternateKey(590873L, 551816L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 428769L;
                                                                                        name = "Brandon Brakus V";
                                                                                        offset = 354047L;
                                                                                    }}),
                                                                                }};
                                                                                compressed = false;
                                                                                encoding = "sint";
                                                                                primaryKey = new PrimaryKey(33625L, 653201L) {{
                                                                                    name = "Shaun Hammes";
                                                                                }};;
                                                                            }};;
                                                                        }};,                 new RecordLength(896547L, 141264L);) {{
                                                            datasetName = "modi";
                                                            datasetOrg = new DatasetOrgAttributes() {{
                                                                gdg = new GdgAttributes() {{
                                                                    limit = 183191L;
                                                                    rollDisposition = "aliquid";
                                                                }};
                                                                vsam = new VsamAttributes("accusamus") {{
                                                                    alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                        add(new AlternateKey(569618L, 270008L) {{
                                                                            allowDuplicates = false;
                                                                            length = 552822L;
                                                                            name = "Louise Simonis Sr.";
                                                                            offset = 677817L;
                                                                        }}),
                                                                        add(new AlternateKey(576157L, 396098L) {{
                                                                            allowDuplicates = false;
                                                                            length = 703737L;
                                                                            name = "Francisco Windler";
                                                                            offset = 756107L;
                                                                        }}),
                                                                        add(new AlternateKey(680056L, 447125L) {{
                                                                            allowDuplicates = false;
                                                                            length = 592042L;
                                                                            name = "Perry Nikolaus";
                                                                            offset = 952749L;
                                                                        }}),
                                                                    }};
                                                                    compressed = false;
                                                                    encoding = "in";
                                                                    format = "illum";
                                                                    primaryKey = new PrimaryKey(396506L, 675439L) {{
                                                                        length = 978571L;
                                                                        name = "Keith Gulgowski";
                                                                        offset = 411820L;
                                                                    }};
                                                                }};
                                                            }};
                                                            recordLength = new RecordLength(313218L, 881736L) {{
                                                                max = 249796L;
                                                                min = 581273L;
                                                            }};
                                                            relativePath = "delectus";
                                                            storageType = "quidem";
                                                        }};
                                                        externalLocation = new ExternalLocation() {{
                                                            s3Location = "nemo";
                                                        }};
                                                    }}),
                                                    add(new DataSetImportItem(                new DataSet("id",                 new DatasetOrgAttributes() {{
                                                                                        gdg = new GdgAttributes() {{
                                                                                            limit = 906418L;
                                                                                            rollDisposition = "eius";
                                                                                        }};;
                                                                                        vsam = new VsamAttributes("aspernatur") {{
                                                                                            alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                                                add(new AlternateKey(588317L, 324683L) {{
                                                                                                    allowDuplicates = false;
                                                                                                    length = 229219L;
                                                                                                    name = "Tomas Hammes";
                                                                                                    offset = 645785L;
                                                                                                }}),
                                                                                            }};
                                                                                            compressed = false;
                                                                                            encoding = "repellendus";
                                                                                            primaryKey = new PrimaryKey(519711L, 628982L) {{
                                                                                                name = "Cristina Hahn";
                                                                                            }};;
                                                                                        }};;
                                                                                    }};,                 new RecordLength(798047L, 885338L);) {{
                                                                        relativePath = "qui";
                                                                        storageType = "dolorum";
                                                                    }};,                 new ExternalLocation() {{
                                                                        s3Location = "a";
                                                                    }};) {{
                                                        dataSet = new DataSet("dolorum",                 new DatasetOrgAttributes() {{
                                                                            gdg = new GdgAttributes() {{
                                                                                limit = 535633L;
                                                                                rollDisposition = "pariatur";
                                                                            }};;
                                                                            vsam = new VsamAttributes("provident") {{
                                                                                alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                                    add(new AlternateKey(222443L, 186193L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 730122L;
                                                                                        name = "Alex Luettgen";
                                                                                        offset = 209843L;
                                                                                    }}),
                                                                                    add(new AlternateKey(227414L, 680545L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 218749L;
                                                                                        name = "Marshall Ritchie";
                                                                                        offset = 970237L;
                                                                                    }}),
                                                                                    add(new AlternateKey(881005L, 696344L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 254356L;
                                                                                        name = "Melissa Bednar";
                                                                                        offset = 311796L;
                                                                                    }}),
                                                                                    add(new AlternateKey(743835L, 679393L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 976405L;
                                                                                        name = "Faye Daugherty PhD";
                                                                                        offset = 67249L;
                                                                                    }}),
                                                                                }};
                                                                                compressed = false;
                                                                                encoding = "iusto";
                                                                                primaryKey = new PrimaryKey(453697L, 677082L) {{
                                                                                    name = "Arturo Treutel";
                                                                                }};;
                                                                            }};;
                                                                        }};,                 new RecordLength(469497L, 216897L);) {{
                                                            datasetName = "ipsam";
                                                            datasetOrg = new DatasetOrgAttributes() {{
                                                                gdg = new GdgAttributes() {{
                                                                    limit = 453543L;
                                                                    rollDisposition = "autem";
                                                                }};
                                                                vsam = new VsamAttributes("occaecati") {{
                                                                    alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                        add(new AlternateKey(764912L, 359978L) {{
                                                                            allowDuplicates = false;
                                                                            length = 50588L;
                                                                            name = "Dr. Herman Wolf";
                                                                            offset = 11714L;
                                                                        }}),
                                                                        add(new AlternateKey(54338L, 338985L) {{
                                                                            allowDuplicates = false;
                                                                            length = 944124L;
                                                                            name = "Robin D'Amore";
                                                                            offset = 489549L;
                                                                        }}),
                                                                        add(new AlternateKey(874573L, 345352L) {{
                                                                            allowDuplicates = false;
                                                                            length = 199996L;
                                                                            name = "Dorothy Dach";
                                                                            offset = 223924L;
                                                                        }}),
                                                                    }};
                                                                    compressed = false;
                                                                    encoding = "hic";
                                                                    format = "recusandae";
                                                                    primaryKey = new PrimaryKey(621479L, 50370L) {{
                                                                        length = 608253L;
                                                                        name = "Freddie Bartoletti";
                                                                        offset = 500026L;
                                                                    }};
                                                                }};
                                                            }};
                                                            recordLength = new RecordLength(992397L, 934214L) {{
                                                                max = 699098L;
                                                                min = 237893L;
                                                            }};
                                                            relativePath = "modi";
                                                            storageType = "iste";
                                                        }};
                                                        externalLocation = new ExternalLocation() {{
                                                            s3Location = "voluptate";
                                                        }};
                                                    }}),
                                                    add(new DataSetImportItem(                new DataSet("saepe",                 new DatasetOrgAttributes() {{
                                                                                        gdg = new GdgAttributes() {{
                                                                                            limit = 217450L;
                                                                                            rollDisposition = "veritatis";
                                                                                        }};;
                                                                                        vsam = new VsamAttributes("nobis") {{
                                                                                            alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                                                add(new AlternateKey(240829L, 677263L) {{
                                                                                                    allowDuplicates = false;
                                                                                                    length = 731694L;
                                                                                                    name = "Kevin Willms";
                                                                                                    offset = 286915L;
                                                                                                }}),
                                                                                                add(new AlternateKey(785153L, 984330L) {{
                                                                                                    allowDuplicates = false;
                                                                                                    length = 100294L;
                                                                                                    name = "Margaret Luettgen MD";
                                                                                                    offset = 833038L;
                                                                                                }}),
                                                                                                add(new AlternateKey(977496L, 787542L) {{
                                                                                                    allowDuplicates = false;
                                                                                                    length = 281730L;
                                                                                                    name = "Ms. Terrance Davis";
                                                                                                    offset = 580447L;
                                                                                                }}),
                                                                                            }};
                                                                                            compressed = false;
                                                                                            encoding = "vero";
                                                                                            primaryKey = new PrimaryKey(606476L, 338159L) {{
                                                                                                name = "Dixie Klocko";
                                                                                            }};;
                                                                                        }};;
                                                                                    }};,                 new RecordLength(949319L, 492268L);) {{
                                                                        relativePath = "hic";
                                                                        storageType = "distinctio";
                                                                    }};,                 new ExternalLocation() {{
                                                                        s3Location = "quod";
                                                                    }};) {{
                                                        dataSet = new DataSet("dicta",                 new DatasetOrgAttributes() {{
                                                                            gdg = new GdgAttributes() {{
                                                                                limit = 674848L;
                                                                                rollDisposition = "totam";
                                                                            }};;
                                                                            vsam = new VsamAttributes("incidunt") {{
                                                                                alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                                    add(new AlternateKey(183280L, 204865L) {{
                                                                                        allowDuplicates = false;
                                                                                        length = 174909L;
                                                                                        name = "Cesar Hyatt";
                                                                                        offset = 840429L;
                                                                                    }}),
                                                                                }};
                                                                                compressed = false;
                                                                                encoding = "fugit";
                                                                                primaryKey = new PrimaryKey(164959L, 488056L) {{
                                                                                    name = "Marion Reichert DDS";
                                                                                }};;
                                                                            }};;
                                                                        }};,                 new RecordLength(746994L, 748664L);) {{
                                                            datasetName = "esse";
                                                            datasetOrg = new DatasetOrgAttributes() {{
                                                                gdg = new GdgAttributes() {{
                                                                    limit = 687488L;
                                                                    rollDisposition = "iusto";
                                                                }};
                                                                vsam = new VsamAttributes("ipsum") {{
                                                                    alternateKeys = new org.openapis.openapi.models.shared.AlternateKey[]{{
                                                                        add(new AlternateKey(213312L, 957451L) {{
                                                                            allowDuplicates = false;
                                                                            length = 788740L;
                                                                            name = "Marvin Renner";
                                                                            offset = 313692L;
                                                                        }}),
                                                                    }};
                                                                    compressed = false;
                                                                    encoding = "totam";
                                                                    format = "nihil";
                                                                    primaryKey = new PrimaryKey(646265L, 463575L) {{
                                                                        length = 25662L;
                                                                        name = "Luis Cremin";
                                                                        offset = 374170L;
                                                                    }};
                                                                }};
                                                            }};
                                                            recordLength = new RecordLength(586784L, 807581L) {{
                                                                max = 277628L;
                                                                min = 186458L;
                                                            }};
                                                            relativePath = "pariatur";
                                                            storageType = "soluta";
                                                        }};
                                                        externalLocation = new ExternalLocation() {{
                                                            s3Location = "et";
                                                        }};
                                                    }}),
                                                }};
                                                s3Location = "odio";
                                            }};) {{
                                clientToken = "similique";
                            }};, "facilis") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "dolore";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "illum";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "natus";
            }};            

            CreateDataSetImportTaskResponse res = sdk.sdk.createDataSetImportTask(req);

            if (res.createDataSetImportTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployment

Creates and starts a deployment to deploy an application into a runtime environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentRequest;
import org.openapis.openapi.models.operations.CreateDeploymentRequestBody;
import org.openapis.openapi.models.operations.CreateDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeploymentRequest req = new CreateDeploymentRequest(                new CreateDeploymentRequestBody(13236L, "voluptatibus") {{
                                clientToken = "exercitationem";
                            }};, "nulla") {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "porro";
                xAmzCredential = "maiores";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "ducimus";
            }};            

            CreateDeploymentResponse res = sdk.sdk.createDeployment(req);

            if (res.createDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEnvironment

Creates a runtime environment for a given runtime engine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyEngineTypeEnum;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyHighAvailabilityConfig;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;
import org.openapis.openapi.models.shared.EfsStorageConfiguration;
import org.openapis.openapi.models.shared.FsxStorageConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StorageConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEnvironmentRequest req = new CreateEnvironmentRequest(                new CreateEnvironmentRequestBody(CreateEnvironmentRequestBodyEngineTypeEnum.BLUAGE, "tempora", "ipsam") {{
                                clientToken = "ea";
                                description = "aspernatur";
                                engineVersion = "vel";
                                highAvailabilityConfig = new CreateEnvironmentRequestBodyHighAvailabilityConfig() {{
                                    desiredCapacity = 822118L;
                                }};;
                                kmsKeyId = "magnam";
                                preferredMaintenanceWindow = "ratione";
                                publiclyAccessible = false;
                                securityGroupIds = new String[]{{
                                    add("laudantium"),
                                    add("dicta"),
                                }};
                                storageConfigurations = new org.openapis.openapi.models.shared.StorageConfiguration[]{{
                                    add(new StorageConfiguration() {{
                                        efs = new EfsStorageConfiguration("ex", "nulla") {{
                                            fileSystemId = "maiores";
                                            mountPoint = "quasi";
                                        }};
                                        fsx = new FsxStorageConfiguration("nostrum", "sapiente") {{
                                            fileSystemId = "excepturi";
                                            mountPoint = "voluptatibus";
                                        }};
                                    }}),
                                }};
                                subnetIds = new String[]{{
                                    add("saepe"),
                                    add("ea"),
                                    add("impedit"),
                                    add("corporis"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aliquid", "inventore");
                                    put("magnam", "ea");
                                }};
                            }};) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "recusandae";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "minima";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "a";
            }};            

            CreateEnvironmentResponse res = sdk.sdk.createEnvironment(req);

            if (res.createEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

Deletes a specific application. You cannot delete a running application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest("aut") {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "impedit";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "inventore";
            }};            

            DeleteApplicationResponse res = sdk.sdk.deleteApplication(req);

            if (res.deleteApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplicationFromEnvironment

Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationFromEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteApplicationFromEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationFromEnvironmentRequest req = new DeleteApplicationFromEnvironmentRequest("et", "dolorum") {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "velit";
                xAmzDate = "eum";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quas";
            }};            

            DeleteApplicationFromEnvironmentResponse res = sdk.sdk.deleteApplicationFromEnvironment(req);

            if (res.deleteApplicationFromEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironment

Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEnvironmentRequest req = new DeleteEnvironmentRequest("nulla") {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "libero";
                xAmzCredential = "quasi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "provident";
            }};            

            DeleteEnvironmentResponse res = sdk.sdk.deleteEnvironment(req);

            if (res.deleteEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplication

Describes the details of a specific application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationRequest;
import org.openapis.openapi.models.operations.GetApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApplicationRequest req = new GetApplicationRequest("molestiae") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eius";
                xAmzDate = "esse";
                xAmzSecurityToken = "esse";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "fuga";
            }};            

            GetApplicationResponse res = sdk.sdk.getApplication(req);

            if (res.getApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplicationVersion

Returns details about a specific version of a specific application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationVersionRequest;
import org.openapis.openapi.models.operations.GetApplicationVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApplicationVersionRequest req = new GetApplicationVersionRequest("quidem", 852635L) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "eum";
                xAmzCredential = "suscipit";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "eos";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "quisquam";
            }};            

            GetApplicationVersionResponse res = sdk.sdk.getApplicationVersion(req);

            if (res.getApplicationVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchJobExecution

Gets the details of a specific batch job execution for a specific application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBatchJobExecutionRequest;
import org.openapis.openapi.models.operations.GetBatchJobExecutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBatchJobExecutionRequest req = new GetBatchJobExecutionRequest("ipsa", "id") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "neque";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "quo";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "eius";
            }};            

            GetBatchJobExecutionResponse res = sdk.sdk.getBatchJobExecution(req);

            if (res.getBatchJobExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataSetDetails

Gets the details of a specific data set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataSetDetailsRequest;
import org.openapis.openapi.models.operations.GetDataSetDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataSetDetailsRequest req = new GetDataSetDetailsRequest("voluptas", "ab") {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "tempora";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "sequi";
            }};            

            GetDataSetDetailsResponse res = sdk.sdk.getDataSetDetails(req);

            if (res.getDataSetDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataSetImportTask

Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataSetImportTaskRequest;
import org.openapis.openapi.models.operations.GetDataSetImportTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataSetImportTaskRequest req = new GetDataSetImportTaskRequest("esse", "recusandae") {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quod";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "totam";
            }};            

            GetDataSetImportTaskResponse res = sdk.sdk.getDataSetImportTask(req);

            if (res.getDataSetImportTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeployment

Gets details of a specific deployment with a given deployment identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentRequest;
import org.openapis.openapi.models.operations.GetDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentRequest req = new GetDeploymentRequest("aliquam", "odio") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "sapiente";
                xAmzDate = "dolores";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "accusantium";
            }};            

            GetDeploymentResponse res = sdk.sdk.getDeployment(req);

            if (res.getDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironment

Describes a specific runtime environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentRequest;
import org.openapis.openapi.models.operations.GetEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnvironmentRequest req = new GetEnvironmentRequest("eum") {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "consequuntur";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "mollitia";
            }};            

            GetEnvironmentResponse res = sdk.sdk.getEnvironment(req);

            if (res.getEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplicationVersions

Returns a list of the application versions for a specific application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationVersionsRequest;
import org.openapis.openapi.models.operations.ListApplicationVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationVersionsRequest req = new ListApplicationVersionsRequest("atque") {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "nisi";
                xAmzDate = "fugit";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "ratione";
                maxResults = 129412L;
                nextToken = "saepe";
            }};            

            ListApplicationVersionsResponse res = sdk.sdk.listApplicationVersions(req);

            if (res.listApplicationVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplications

Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationsRequest;
import org.openapis.openapi.models.operations.ListApplicationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationsRequest req = new ListApplicationsRequest() {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "et";
                xAmzCredential = "esse";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "esse";
                environmentId = "quod";
                maxResults = 724168L;
                names = new String[]{{
                    add("aliquid"),
                    add("quasi"),
                    add("saepe"),
                    add("vel"),
                }};
                nextToken = "harum";
            }};            

            ListApplicationsResponse res = sdk.sdk.listApplications(req);

            if (res.listApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBatchJobDefinitions

Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBatchJobDefinitionsRequest;
import org.openapis.openapi.models.operations.ListBatchJobDefinitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBatchJobDefinitionsRequest req = new ListBatchJobDefinitionsRequest("rerum") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "minima";
                xAmzCredential = "distinctio";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sit";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "tempore";
                maxResults = 240020L;
                nextToken = "cumque";
                prefix = "consequuntur";
            }};            

            ListBatchJobDefinitionsResponse res = sdk.sdk.listBatchJobDefinitions(req);

            if (res.listBatchJobDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBatchJobExecutions

Lists historical, current, and scheduled batch job executions for a specific application.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBatchJobExecutionsRequest;
import org.openapis.openapi.models.operations.ListBatchJobExecutionsResponse;
import org.openapis.openapi.models.operations.ListBatchJobExecutionsStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBatchJobExecutionsRequest req = new ListBatchJobExecutionsRequest("minus") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "consectetur";
                xAmzDate = "esse";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "a";
                executionIds = new String[]{{
                    add("quas"),
                    add("esse"),
                    add("quasi"),
                    add("a"),
                }};
                jobName = "error";
                maxResults = 575751L;
                nextToken = "pariatur";
                startedAfter = OffsetDateTime.parse("2022-07-12T09:25:25.257Z");
                startedBefore = OffsetDateTime.parse("2020-01-10T06:57:07.831Z");
                status = ListBatchJobExecutionsStatusEnum.FAILED;
            }};            

            ListBatchJobExecutionsResponse res = sdk.sdk.listBatchJobExecutions(req);

            if (res.listBatchJobExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataSetImportHistory

Lists the data set imports for the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataSetImportHistoryRequest;
import org.openapis.openapi.models.operations.ListDataSetImportHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDataSetImportHistoryRequest req = new ListDataSetImportHistoryRequest("consequuntur") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "similique";
                xAmzCredential = "culpa";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "earum";
                maxResults = 424032L;
                nextToken = "in";
            }};            

            ListDataSetImportHistoryResponse res = sdk.sdk.listDataSetImportHistory(req);

            if (res.listDataSetImportHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataSets

Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataSetsRequest;
import org.openapis.openapi.models.operations.ListDataSetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDataSetsRequest req = new ListDataSetsRequest("libero") {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "accusantium";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "ullam";
                maxResults = 443879L;
                nextToken = "ullam";
                prefix = "nisi";
            }};            

            ListDataSetsResponse res = sdk.sdk.listDataSets(req);

            if (res.listDataSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeployments

Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeploymentsRequest;
import org.openapis.openapi.models.operations.ListDeploymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeploymentsRequest req = new ListDeploymentsRequest("voluptatum") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "ex";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "architecto";
                maxResults = 609178L;
                nextToken = "tenetur";
            }};            

            ListDeploymentsResponse res = sdk.sdk.listDeployments(req);

            if (res.listDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEngineVersions

Lists the available engine versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEngineVersionsEngineTypeEnum;
import org.openapis.openapi.models.operations.ListEngineVersionsRequest;
import org.openapis.openapi.models.operations.ListEngineVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEngineVersionsRequest req = new ListEngineVersionsRequest() {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "et";
                xAmzCredential = "voluptate";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "minima";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "consectetur";
                engineType = ListEngineVersionsEngineTypeEnum.MICROFOCUS;
                maxResults = 614465L;
                nextToken = "temporibus";
            }};            

            ListEngineVersionsResponse res = sdk.sdk.listEngineVersions(req);

            if (res.listEngineVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnvironments

Lists the runtime environments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnvironmentsEngineTypeEnum;
import org.openapis.openapi.models.operations.ListEnvironmentsRequest;
import org.openapis.openapi.models.operations.ListEnvironmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEnvironmentsRequest req = new ListEnvironmentsRequest() {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "aut";
                xAmzCredential = "laudantium";
                xAmzDate = "eum";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "corrupti";
                engineType = ListEnvironmentsEngineTypeEnum.MICROFOCUS;
                maxResults = 32465L;
                names = new String[]{{
                    add("occaecati"),
                }};
                nextToken = "numquam";
            }};            

            ListEnvironmentsResponse res = sdk.sdk.listEnvironments(req);

            if (res.listEnvironmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for the specified resource.

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
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("explicabo") {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "aut";
                xAmzCredential = "dignissimos";
                xAmzDate = "dicta";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "velit";
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

## startApplication

Starts an application that is currently stopped.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartApplicationRequest;
import org.openapis.openapi.models.operations.StartApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartApplicationRequest req = new StartApplicationRequest("voluptas") {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "ea";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "officia";
            }};            

            StartApplicationResponse res = sdk.sdk.startApplication(req);

            if (res.startApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startBatchJob

Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartBatchJobRequest;
import org.openapis.openapi.models.operations.StartBatchJobRequestBody;
import org.openapis.openapi.models.operations.StartBatchJobRequestBodyBatchJobIdentifier;
import org.openapis.openapi.models.operations.StartBatchJobResponse;
import org.openapis.openapi.models.shared.FileBatchJobIdentifier;
import org.openapis.openapi.models.shared.ScriptBatchJobIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartBatchJobRequest req = new StartBatchJobRequest(                new StartBatchJobRequestBody(                new StartBatchJobRequestBodyBatchJobIdentifier() {{
                                                fileBatchJobIdentifier = new FileBatchJobIdentifier("dignissimos") {{
                                                    folderPath = "officia";
                                                }};;
                                                scriptBatchJobIdentifier = new ScriptBatchJobIdentifier("asperiores");;
                                            }};) {{
                                jobParams = new java.util.HashMap<String, String>() {{
                                    put("quae", "quaerat");
                                    put("porro", "quod");
                                }};
                            }};, "labore") {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "fuga";
                xAmzDate = "id";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "culpa";
            }};            

            StartBatchJobResponse res = sdk.sdk.startBatchJob(req);

            if (res.startBatchJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopApplication

Stops a running application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopApplicationRequest;
import org.openapis.openapi.models.operations.StopApplicationRequestBody;
import org.openapis.openapi.models.operations.StopApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopApplicationRequest req = new StopApplicationRequest(                new StopApplicationRequestBody() {{
                                forceStop = false;
                            }};, "recusandae") {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "vel";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "quos";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "labore";
            }};            

            StopApplicationResponse res = sdk.sdk.stopApplication(req);

            if (res.stopApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds one or more tags to the specified resource.

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
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("cum", "commodi");
                                                put("in", "corporis");
                                                put("reiciendis", "assumenda");
                                            }});, "nemo") {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "aperiam";
                xAmzDate = "cum";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "in";
                xAmzSignedHeaders = "exercitationem";
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

Removes one or more tags from the specified resource.

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
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("facere",                 new String[]{{
                                add("doloribus"),
                                add("suscipit"),
                            }}) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "saepe";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "asperiores";
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

## updateApplication

Updates an application and creates a new version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBody;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBodyDefinition;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest(                new UpdateApplicationRequestBody(249420L) {{
                                definition = new UpdateApplicationRequestBodyDefinition() {{
                                    content = "amet";
                                    s3Location = "beatae";
                                }};;
                                description = "dignissimos";
                            }};, "a") {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "corporis";
                xAmzDate = "harum";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "voluptates";
            }};            

            UpdateApplicationResponse res = sdk.sdk.updateApplication(req);

            if (res.updateApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEnvironment

Updates the configuration details for a specific runtime environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.UpdateEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEnvironmentRequest req = new UpdateEnvironmentRequest(                new UpdateEnvironmentRequestBody() {{
                                applyDuringMaintenanceWindow = false;
                                desiredCapacity = 113816L;
                                engineVersion = "accusamus";
                                instanceType = "similique";
                                preferredMaintenanceWindow = "tempora";
                            }};, "aspernatur") {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "voluptas";
                xAmzDate = "minima";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "adipisci";
            }};            

            UpdateEnvironmentResponse res = sdk.sdk.updateEnvironment(req);

            if (res.updateEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
