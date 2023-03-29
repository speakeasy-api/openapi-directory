# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/emr-containers/2020-10-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CancelJobRunRequest{
        PathParams: operations.CancelJobRunPathParams{
            JobRunID: "unde",
            VirtualClusterID: "deserunt",
        },
        Headers: operations.CancelJobRunHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.CancelJobRun(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobRunResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CancelJobRun` - Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* `CreateJobTemplate` - Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* `CreateManagedEndpoint` - Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* `CreateVirtualCluster` - Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* `DeleteJobTemplate` - Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* `DeleteManagedEndpoint` - Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* `DeleteVirtualCluster` - Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* `DescribeJobRun` - Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* `DescribeJobTemplate` - Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* `DescribeManagedEndpoint` - Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* `DescribeVirtualCluster` - Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* `ListJobRuns` - Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* `ListJobTemplates` - Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* `ListManagedEndpoints` - Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* `ListTagsForResource` - Lists the tags assigned to the resources.
* `ListVirtualClusters` - Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* `StartJobRun` - Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* `TagResource` - Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.
* `UntagResource` - Removes tags from resources.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
