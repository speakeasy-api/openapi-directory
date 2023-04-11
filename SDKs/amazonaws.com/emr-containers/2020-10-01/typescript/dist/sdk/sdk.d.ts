import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://emr-containers.{region}.amazonaws.com", "https://emr-containers.{region}.amazonaws.com", "http://emr-containers.{region}.amazonaws.com.cn", "https://emr-containers.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications. For more information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is shared id="EMR-EKS"/&gt;</a>.</p> <p> <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The <code>emr-containers</code> prefix is used in the following scenarios: </p> <ul> <li> <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example, <code>aws emr-containers start-job-run</code>.</p> </li> <li> <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, <code>"Action": [ "emr-containers:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p> </li> <li> <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example, <code>emr-containers.us-east-2.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKSService Endpoints</a>.</p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/emr-containers/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
     */
    cancelJobRun(req: operations.CancelJobRunRequest, config?: AxiosRequestConfig): Promise<operations.CancelJobRunResponse>;
    /**
     * Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
     */
    createJobTemplate(req: operations.CreateJobTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateJobTemplateResponse>;
    /**
     * Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
     */
    createManagedEndpoint(req: operations.CreateManagedEndpointRequest, config?: AxiosRequestConfig): Promise<operations.CreateManagedEndpointResponse>;
    /**
     * Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
     */
    createVirtualCluster(req: operations.CreateVirtualClusterRequest, config?: AxiosRequestConfig): Promise<operations.CreateVirtualClusterResponse>;
    /**
     * Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
     */
    deleteJobTemplate(req: operations.DeleteJobTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobTemplateResponse>;
    /**
     * Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
     */
    deleteManagedEndpoint(req: operations.DeleteManagedEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteManagedEndpointResponse>;
    /**
     * Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
     */
    deleteVirtualCluster(req: operations.DeleteVirtualClusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVirtualClusterResponse>;
    /**
     * Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
     */
    describeJobRun(req: operations.DescribeJobRunRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobRunResponse>;
    /**
     * Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
     */
    describeJobTemplate(req: operations.DescribeJobTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobTemplateResponse>;
    /**
     * Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
     */
    describeManagedEndpoint(req: operations.DescribeManagedEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DescribeManagedEndpointResponse>;
    /**
     * Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
     */
    describeVirtualCluster(req: operations.DescribeVirtualClusterRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVirtualClusterResponse>;
    /**
     * Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
     */
    listJobRuns(req: operations.ListJobRunsRequest, config?: AxiosRequestConfig): Promise<operations.ListJobRunsResponse>;
    /**
     * Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
     */
    listJobTemplates(req: operations.ListJobTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListJobTemplatesResponse>;
    /**
     * Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
     */
    listManagedEndpoints(req: operations.ListManagedEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.ListManagedEndpointsResponse>;
    /**
     * Lists the tags assigned to the resources.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
     */
    listVirtualClusters(req: operations.ListVirtualClustersRequest, config?: AxiosRequestConfig): Promise<operations.ListVirtualClustersResponse>;
    /**
     * Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
     */
    startJobRun(req: operations.StartJobRunRequest, config?: AxiosRequestConfig): Promise<operations.StartJobRunResponse>;
    /**
     * Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from resources.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
