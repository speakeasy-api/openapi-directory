# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/emr-containers/2020-10-01/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CancelJobRunRequest(
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="provident",
    x_amz_credential="distinctio",
    x_amz_date="quibusdam",
    x_amz_security_token="unde",
    x_amz_signature="nulla",
    x_amz_signed_headers="corrupti",
    job_run_id="illum",
    virtual_cluster_id="vel",
)
    
res = s.cancel_job_run(req)

if res.cancel_job_run_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `cancel_job_run` - Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* `create_job_template` - Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* `create_managed_endpoint` - Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* `create_virtual_cluster` - Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* `delete_job_template` - Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* `delete_managed_endpoint` - Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* `delete_virtual_cluster` - Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* `describe_job_run` - Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* `describe_job_template` - Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* `describe_managed_endpoint` - Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* `describe_virtual_cluster` - Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* `list_job_runs` - Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* `list_job_templates` - Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* `list_managed_endpoints` - Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* `list_tags_for_resource` - Lists the tags assigned to the resources.
* `list_virtual_clusters` - Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* `start_job_run` - Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* `tag_resource` - Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.
* `untag_resource` - Removes tags from resources.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
