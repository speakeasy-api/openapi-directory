import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Discovery configuration associated to the workload.
 */
export declare class CreateWorkloadRequestBodyDiscoveryConfig extends SpeakeasyBase {
    trustedAdvisorIntegrationStatus?: shared.TrustedAdvisorIntegrationStatusEnum;
}
/**
 * The environment for the workload.
 */
export declare enum CreateWorkloadRequestBodyEnvironmentEnum {
    Production = "PRODUCTION",
    Preproduction = "PREPRODUCTION"
}
export declare class CreateWorkloadRequestBody extends SpeakeasyBase {
    /**
     * The list of Amazon Web Services account IDs associated with the workload.
     */
    accountIds?: string[];
    /**
     * List of AppRegistry application ARNs associated to the workload.
     */
    applications?: string[];
    /**
     * The URL of the architectural design for the workload.
     */
    architecturalDesign?: string;
    /**
     * The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.
     */
    awsRegions?: string[];
    /**
     * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned. </p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
     */
    clientRequestToken: string;
    /**
     * The description for the workload.
     */
    description: string;
    /**
     * Discovery configuration associated to the workload.
     */
    discoveryConfig?: CreateWorkloadRequestBodyDiscoveryConfig;
    /**
     * The environment for the workload.
     */
    environment: CreateWorkloadRequestBodyEnvironmentEnum;
    /**
     * The industry for the workload.
     */
    industry?: string;
    /**
     * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
     */
    industryType?: string;
    /**
     * The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.
     */
    lenses: string[];
    /**
     *  The list of non-Amazon Web Services Regions associated with the workload.
     */
    nonAwsRegions?: string[];
    /**
     * The notes associated with the workload.
     */
    notes?: string;
    /**
     * The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.
     */
    pillarPriorities?: string[];
    /**
     * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
     */
    reviewOwner?: string;
    /**
     * The tags to be associated with the workload.
     */
    tags?: Record<string, string>;
    /**
     * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
     */
    workloadName: string;
}
export declare class CreateWorkloadRequest extends SpeakeasyBase {
    requestBody: CreateWorkloadRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWorkloadResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createWorkloadOutput?: shared.CreateWorkloadOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
