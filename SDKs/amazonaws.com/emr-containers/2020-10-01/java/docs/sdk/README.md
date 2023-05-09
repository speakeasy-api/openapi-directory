# SDK

## Overview

<p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications. For more information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is shared id="EMR-EKS"/&gt;</a>.</p> <p> <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The <code>emr-containers</code> prefix is used in the following scenarios: </p> <ul> <li> <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example, <code>aws emr-containers start-job-run</code>.</p> </li> <li> <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, <code>"Action": [ "emr-containers:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p> </li> <li> <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example, <code>emr-containers.us-east-2.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKSService Endpoints</a>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/emr-containers/>
### Available Operations

* [cancelJobRun](#canceljobrun) - Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [createJobTemplate](#createjobtemplate) - Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [createManagedEndpoint](#createmanagedendpoint) - Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [createVirtualCluster](#createvirtualcluster) - Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [deleteJobTemplate](#deletejobtemplate) - Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [deleteManagedEndpoint](#deletemanagedendpoint) - Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [deleteVirtualCluster](#deletevirtualcluster) - Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [describeJobRun](#describejobrun) - Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [describeJobTemplate](#describejobtemplate) - Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [describeManagedEndpoint](#describemanagedendpoint) - Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [describeVirtualCluster](#describevirtualcluster) - Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [listJobRuns](#listjobruns) - Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [listJobTemplates](#listjobtemplates) - Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [listManagedEndpoints](#listmanagedendpoints) - Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [listTagsForResource](#listtagsforresource) - Lists the tags assigned to the resources.
* [listVirtualClusters](#listvirtualclusters) - Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [startJobRun](#startjobrun) - Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [tagResource](#tagresource) - Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.
* [untagResource](#untagresource) - Removes tags from resources.

## cancelJobRun

Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelJobRunRequest;
import org.openapis.openapi.models.operations.CancelJobRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelJobRunRequest req = new CancelJobRunRequest("suscipit", "iure") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            CancelJobRunResponse res = sdk.sdk.cancelJobRun(req);

            if (res.cancelJobRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createJobTemplate

Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateJobTemplateRequest;
import org.openapis.openapi.models.operations.CreateJobTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateJobTemplateRequestBodyJobTemplateData;
import org.openapis.openapi.models.operations.CreateJobTemplateResponse;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.JobDriver;
import org.openapis.openapi.models.shared.ParametricCloudWatchMonitoringConfiguration;
import org.openapis.openapi.models.shared.ParametricConfigurationOverrides;
import org.openapis.openapi.models.shared.ParametricMonitoringConfiguration;
import org.openapis.openapi.models.shared.ParametricS3MonitoringConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SparkSqlJobDriver;
import org.openapis.openapi.models.shared.SparkSubmitJobDriver;
import org.openapis.openapi.models.shared.TemplateParameterConfiguration;
import org.openapis.openapi.models.shared.TemplateParameterDataTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateJobTemplateRequest req = new CreateJobTemplateRequest(                new CreateJobTemplateRequestBody("placeat",                 new CreateJobTemplateRequestBodyJobTemplateData() {{
                                                configurationOverrides = new ParametricConfigurationOverrides() {{
                                                    applicationConfiguration = new org.openapis.openapi.models.shared.Configuration[]{{
                                                        add(new Configuration("recusandae") {{
                                                            classification = "iusto";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = "nisi";
                                                        }}),
                                                        add(new Configuration("veritatis") {{
                                                            classification = "temporibus";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = "quis";
                                                        }}),
                                                        add(new Configuration("repellendus") {{
                                                            classification = "deserunt";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = "ipsam";
                                                        }}),
                                                    }};
                                                    monitoringConfiguration = new ParametricMonitoringConfiguration() {{
                                                        cloudWatchMonitoringConfiguration = new ParametricCloudWatchMonitoringConfiguration() {{
                                                            logGroupName = "sapiente";
                                                            logStreamNamePrefix = "quo";
                                                        }};;
                                                        persistentAppUI = "odit";
                                                        s3MonitoringConfiguration = new ParametricS3MonitoringConfiguration() {{
                                                            logUri = "at";
                                                        }};;
                                                    }};;
                                                }};;
                                                executionRoleArn = "at";
                                                jobDriver = new JobDriver() {{
                                                    sparkSqlJobDriver = new SparkSqlJobDriver() {{
                                                        entryPoint = "maiores";
                                                        sparkSqlParameters = "molestiae";
                                                    }};;
                                                    sparkSubmitJobDriver = new SparkSubmitJobDriver("quod") {{
                                                        entryPointArguments = new String[]{{
                                                            add("esse"),
                                                            add("totam"),
                                                            add("porro"),
                                                            add("dolorum"),
                                                        }};
                                                        sparkSubmitParameters = "dicta";
                                                    }};;
                                                }};;
                                                jobTags = new java.util.HashMap<String, String>() {{
                                                    put("officia", "occaecati");
                                                    put("fugit", "deleniti");
                                                    put("hic", "optio");
                                                }};
                                                parameterConfiguration = new java.util.HashMap<String, org.openapis.openapi.models.shared.TemplateParameterConfiguration>() {{
                                                    put("beatae", new TemplateParameterConfiguration() {{
                                                        defaultValue = "commodi";
                                                        type = TemplateParameterDataTypeEnum.NUMBER;
                                                    }});
                                                    put("modi", new TemplateParameterConfiguration() {{
                                                        defaultValue = "qui";
                                                        type = TemplateParameterDataTypeEnum.STRING;
                                                    }});
                                                    put("cum", new TemplateParameterConfiguration() {{
                                                        defaultValue = "esse";
                                                        type = TemplateParameterDataTypeEnum.NUMBER;
                                                    }});
                                                }};
                                                releaseLabel = "excepturi";
                                            }};, "aspernatur") {{
                                kmsKeyArn = "perferendis";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("natus", "sed");
                                    put("iste", "dolor");
                                }};
                            }};) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "hic";
                xAmzDate = "saepe";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateJobTemplateResponse res = sdk.sdk.createJobTemplate(req);

            if (res.createJobTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createManagedEndpoint

Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateManagedEndpointRequest;
import org.openapis.openapi.models.operations.CreateManagedEndpointRequestBody;
import org.openapis.openapi.models.operations.CreateManagedEndpointRequestBodyConfigurationOverrides;
import org.openapis.openapi.models.operations.CreateManagedEndpointResponse;
import org.openapis.openapi.models.shared.CloudWatchMonitoringConfiguration;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.MonitoringConfiguration;
import org.openapis.openapi.models.shared.PersistentAppUIEnum;
import org.openapis.openapi.models.shared.S3MonitoringConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateManagedEndpointRequest req = new CreateManagedEndpointRequest(                new CreateManagedEndpointRequestBody("iure", "saepe", "quidem", "architecto", "ipsa") {{
                                certificateArn = "reiciendis";
                                configurationOverrides = new CreateManagedEndpointRequestBodyConfigurationOverrides() {{
                                    applicationConfiguration = new org.openapis.openapi.models.shared.Configuration[]{{
                                        add(new Configuration("dolorem") {{
                                            classification = "mollitia";
                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                            }};
                                            properties = "dolores";
                                        }}),
                                        add(new Configuration("enim") {{
                                            classification = "corporis";
                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration() {{}}),
                                            }};
                                            properties = "nobis";
                                        }}),
                                        add(new Configuration("excepturi") {{
                                            classification = "omnis";
                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                            }};
                                            properties = "minima";
                                        }}),
                                    }};
                                    monitoringConfiguration = new MonitoringConfiguration() {{
                                        cloudWatchMonitoringConfiguration = new CloudWatchMonitoringConfiguration("accusantium") {{
                                            logStreamNamePrefix = "iure";
                                        }};;
                                        persistentAppUI = PersistentAppUIEnum.DISABLED;
                                        s3MonitoringConfiguration = new S3MonitoringConfiguration("doloribus");;
                                    }};;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("architecto", "mollitia");
                                    put("dolorem", "culpa");
                                    put("consequuntur", "repellat");
                                    put("mollitia", "occaecati");
                                }};
                            }};, "numquam") {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestiae";
                xAmzDate = "velit";
                xAmzSecurityToken = "error";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "quis";
            }};            

            CreateManagedEndpointResponse res = sdk.sdk.createManagedEndpoint(req);

            if (res.createManagedEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVirtualCluster

Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVirtualClusterRequest;
import org.openapis.openapi.models.operations.CreateVirtualClusterRequestBody;
import org.openapis.openapi.models.operations.CreateVirtualClusterRequestBodyContainerProvider;
import org.openapis.openapi.models.operations.CreateVirtualClusterResponse;
import org.openapis.openapi.models.shared.ContainerInfo;
import org.openapis.openapi.models.shared.ContainerProviderTypeEnum;
import org.openapis.openapi.models.shared.EksInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVirtualClusterRequest req = new CreateVirtualClusterRequest(                new CreateVirtualClusterRequestBody("laborum",                 new CreateVirtualClusterRequestBodyContainerProvider() {{
                                                id = "a52c3f5a-d019-4da1-bfe7-8f097b0074f1";
                                                info = new ContainerInfo() {{
                                                    eksInfo = new EksInfo() {{
                                                        namespace = "corporis";
                                                    }};;
                                                }};;
                                                type = ContainerProviderTypeEnum.EKS;
                                            }};, "dolore") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("dicta", "harum");
                                    put("enim", "accusamus");
                                }};
                            }};) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "quae";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateVirtualClusterResponse res = sdk.sdk.createVirtualCluster(req);

            if (res.createVirtualClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteJobTemplate

Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJobTemplateRequest;
import org.openapis.openapi.models.operations.DeleteJobTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteJobTemplateRequest req = new DeleteJobTemplateRequest("modi") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "rem";
                xAmzCredential = "voluptates";
                xAmzDate = "quasi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "veritatis";
            }};            

            DeleteJobTemplateResponse res = sdk.sdk.deleteJobTemplate(req);

            if (res.deleteJobTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteManagedEndpoint

Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteManagedEndpointRequest;
import org.openapis.openapi.models.operations.DeleteManagedEndpointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteManagedEndpointRequest req = new DeleteManagedEndpointRequest("incidunt", "enim") {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
            }};            

            DeleteManagedEndpointResponse res = sdk.sdk.deleteManagedEndpoint(req);

            if (res.deleteManagedEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVirtualCluster

Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVirtualClusterRequest;
import org.openapis.openapi.models.operations.DeleteVirtualClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVirtualClusterRequest req = new DeleteVirtualClusterRequest("modi") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
            }};            

            DeleteVirtualClusterResponse res = sdk.sdk.deleteVirtualCluster(req);

            if (res.deleteVirtualClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeJobRun

Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeJobRunRequest;
import org.openapis.openapi.models.operations.DescribeJobRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobRunRequest req = new DescribeJobRunRequest("alias", "fugit") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
            }};            

            DescribeJobRunResponse res = sdk.sdk.describeJobRun(req);

            if (res.describeJobRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeJobTemplate

Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeJobTemplateRequest;
import org.openapis.openapi.models.operations.DescribeJobTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobTemplateRequest req = new DescribeJobTemplateRequest("non") {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "sint";
                xAmzCredential = "aliquid";
                xAmzDate = "provident";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "officia";
            }};            

            DescribeJobTemplateResponse res = sdk.sdk.describeJobTemplate(req);

            if (res.describeJobTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeManagedEndpoint

Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeManagedEndpointRequest;
import org.openapis.openapi.models.operations.DescribeManagedEndpointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeManagedEndpointRequest req = new DescribeManagedEndpointRequest("debitis", "a") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "in";
                xAmzCredential = "in";
                xAmzDate = "illum";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "dicta";
            }};            

            DescribeManagedEndpointResponse res = sdk.sdk.describeManagedEndpoint(req);

            if (res.describeManagedEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVirtualCluster

Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVirtualClusterRequest;
import org.openapis.openapi.models.operations.DescribeVirtualClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVirtualClusterRequest req = new DescribeVirtualClusterRequest("cumque") {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aliquid";
                xAmzDate = "laborum";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "non";
                xAmzSignedHeaders = "occaecati";
            }};            

            DescribeVirtualClusterResponse res = sdk.sdk.describeVirtualCluster(req);

            if (res.describeVirtualClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listJobRuns

Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListJobRunsRequest;
import org.openapis.openapi.models.operations.ListJobRunsResponse;
import org.openapis.openapi.models.shared.JobRunStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListJobRunsRequest req = new ListJobRunsRequest("accusamus") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "provident";
                xAmzDate = "nam";
                xAmzSecurityToken = "id";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "deleniti";
                createdAfter = OffsetDateTime.parse("2022-04-23T13:35:30.978Z");
                createdBefore = OffsetDateTime.parse("2022-03-18T17:53:23.400Z");
                maxResults = 423855L;
                name = "Ms. Arturo Krajcik";
                nextToken = "distinctio";
                states = new org.openapis.openapi.models.shared.JobRunStateEnum[]{{
                    add(JobRunStateEnum.RUNNING),
                    add(JobRunStateEnum.RUNNING),
                    add(JobRunStateEnum.RUNNING),
                }};
            }};            

            ListJobRunsResponse res = sdk.sdk.listJobRuns(req);

            if (res.listJobRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listJobTemplates

Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListJobTemplatesRequest;
import org.openapis.openapi.models.operations.ListJobTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListJobTemplatesRequest req = new ListJobTemplatesRequest() {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "vero";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "et";
                createdAfter = OffsetDateTime.parse("2022-04-17T13:06:08.135Z");
                createdBefore = OffsetDateTime.parse("2021-11-24T04:10:44.711Z");
                maxResults = 574325L;
                nextToken = "accusantium";
            }};            

            ListJobTemplatesResponse res = sdk.sdk.listJobTemplates(req);

            if (res.listJobTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listManagedEndpoints

Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListManagedEndpointsRequest;
import org.openapis.openapi.models.operations.ListManagedEndpointsResponse;
import org.openapis.openapi.models.shared.EndpointStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListManagedEndpointsRequest req = new ListManagedEndpointsRequest("reiciendis") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ad";
                xAmzCredential = "eum";
                xAmzDate = "dolor";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "nemo";
                createdAfter = OffsetDateTime.parse("2022-07-25T21:49:23.340Z");
                createdBefore = OffsetDateTime.parse("2020-04-29T08:15:14.819Z");
                maxResults = 260341L;
                nextToken = "maxime";
                states = new org.openapis.openapi.models.shared.EndpointStateEnum[]{{
                    add(EndpointStateEnum.TERMINATED),
                    add(EndpointStateEnum.TERMINATING),
                    add(EndpointStateEnum.CREATING),
                }};
                types = new String[]{{
                    add("repudiandae"),
                }};
            }};            

            ListManagedEndpointsResponse res = sdk.sdk.listManagedEndpoints(req);

            if (res.listManagedEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags assigned to the resources.

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
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("expedita") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
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

## listVirtualClusters

Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVirtualClustersContainerProviderTypeEnum;
import org.openapis.openapi.models.operations.ListVirtualClustersRequest;
import org.openapis.openapi.models.operations.ListVirtualClustersResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VirtualClusterStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVirtualClustersRequest req = new ListVirtualClustersRequest() {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "natus";
                xAmzCredential = "magni";
                xAmzDate = "sunt";
                xAmzSecurityToken = "quo";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "pariatur";
                containerProviderId = "maxime";
                containerProviderType = ListVirtualClustersContainerProviderTypeEnum.EKS;
                createdAfter = OffsetDateTime.parse("2022-06-07T06:40:38.496Z");
                createdBefore = OffsetDateTime.parse("2022-08-05T09:04:26.932Z");
                maxResults = 33222L;
                nextToken = "ab";
                states = new org.openapis.openapi.models.shared.VirtualClusterStateEnum[]{{
                    add(VirtualClusterStateEnum.TERMINATED),
                    add(VirtualClusterStateEnum.TERMINATING),
                    add(VirtualClusterStateEnum.TERMINATING),
                    add(VirtualClusterStateEnum.TERMINATING),
                }};
            }};            

            ListVirtualClustersResponse res = sdk.sdk.listVirtualClusters(req);

            if (res.listVirtualClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startJobRun

Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartJobRunRequest;
import org.openapis.openapi.models.operations.StartJobRunRequestBody;
import org.openapis.openapi.models.operations.StartJobRunRequestBodyConfigurationOverrides;
import org.openapis.openapi.models.operations.StartJobRunRequestBodyJobDriver;
import org.openapis.openapi.models.operations.StartJobRunRequestBodyRetryPolicyConfiguration;
import org.openapis.openapi.models.operations.StartJobRunResponse;
import org.openapis.openapi.models.shared.CloudWatchMonitoringConfiguration;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.MonitoringConfiguration;
import org.openapis.openapi.models.shared.PersistentAppUIEnum;
import org.openapis.openapi.models.shared.S3MonitoringConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SparkSqlJobDriver;
import org.openapis.openapi.models.shared.SparkSubmitJobDriver;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartJobRunRequest req = new StartJobRunRequest(                new StartJobRunRequestBody("eaque") {{
                                configurationOverrides = new StartJobRunRequestBodyConfigurationOverrides() {{
                                    applicationConfiguration = new org.openapis.openapi.models.shared.Configuration[]{{
                                        add(new Configuration("fugiat") {{
                                            classification = "nemo";
                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                            }};
                                            properties = "perferendis";
                                        }}),
                                        add(new Configuration("corporis") {{
                                            classification = "amet";
                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration() {{}}),
                                            }};
                                            properties = "cumque";
                                        }}),
                                        add(new Configuration("dolores") {{
                                            classification = "hic";
                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                            }};
                                            properties = "nobis";
                                        }}),
                                        add(new Configuration("eaque") {{
                                            classification = "quis";
                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                            }};
                                            properties = "dignissimos";
                                        }}),
                                    }};
                                    monitoringConfiguration = new MonitoringConfiguration() {{
                                        cloudWatchMonitoringConfiguration = new CloudWatchMonitoringConfiguration("quis") {{
                                            logStreamNamePrefix = "nesciunt";
                                        }};;
                                        persistentAppUI = PersistentAppUIEnum.ENABLED;
                                        s3MonitoringConfiguration = new S3MonitoringConfiguration("perferendis");;
                                    }};;
                                }};;
                                executionRoleArn = "dolores";
                                jobDriver = new StartJobRunRequestBodyJobDriver() {{
                                    sparkSqlJobDriver = new SparkSqlJobDriver() {{
                                        entryPoint = "minus";
                                        sparkSqlParameters = "quam";
                                    }};;
                                    sparkSubmitJobDriver = new SparkSubmitJobDriver("dolor") {{
                                        entryPointArguments = new String[]{{
                                            add("nostrum"),
                                            add("hic"),
                                            add("recusandae"),
                                            add("omnis"),
                                        }};
                                        sparkSubmitParameters = "facilis";
                                    }};;
                                }};;
                                jobTemplateId = "perspiciatis";
                                jobTemplateParameters = new java.util.HashMap<String, String>() {{
                                    put("porro", "consequuntur");
                                }};
                                name = "Jeremiah Beatty";
                                releaseLabel = "adipisci";
                                retryPolicyConfiguration = new StartJobRunRequestBodyRetryPolicyConfiguration() {{
                                    maxAttempts = 992397L;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("modi", "iste");
                                    put("dolorum", "deleniti");
                                    put("pariatur", "provident");
                                    put("nobis", "libero");
                                }};
                            }};, "delectus") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aliquid";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "qui";
            }};            

            StartJobRunResponse res = sdk.sdk.startJobRun(req);

            if (res.startJobRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.

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
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("excepturi", "cum");
                                                put("voluptate", "dignissimos");
                                                put("reiciendis", "amet");
                                                put("dolorum", "numquam");
                                            }});, "veritatis") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quidem";
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

Removes tags from resources.

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
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("voluptas",                 new String[]{{
                                add("eos"),
                                add("atque"),
                                add("sit"),
                            }}) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ab";
                xAmzCredential = "soluta";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dolorum";
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
