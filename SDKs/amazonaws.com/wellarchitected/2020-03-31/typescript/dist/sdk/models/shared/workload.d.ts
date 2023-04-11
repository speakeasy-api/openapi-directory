import { SpeakeasyBase } from "../../../internal/utils";
import { WorkloadDiscoveryConfig } from "./workloaddiscoveryconfig";
import { WorkloadEnvironmentEnum } from "./workloadenvironmentenum";
import { WorkloadImprovementStatusEnum } from "./workloadimprovementstatusenum";
/**
 * A workload return object.
 */
export declare class Workload extends SpeakeasyBase {
    /**
     * The list of Amazon Web Services account IDs associated with the workload.
     */
    accountIds?: string[];
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
     * The description for the workload.
     */
    description?: string;
    discoveryConfig?: WorkloadDiscoveryConfig;
    /**
     * The environment for the workload.
     */
    environment?: WorkloadEnvironmentEnum;
    /**
     * The improvement status for a workload.
     */
    improvementStatus?: WorkloadImprovementStatusEnum;
    /**
     * The industry for the workload.
     */
    industry?: string;
    /**
     * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
     */
    industryType?: string;
    isReviewOwnerUpdateAcknowledged?: boolean;
    /**
     * The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.
     */
    lenses?: string[];
    /**
     *  The list of non-Amazon Web Services Regions associated with the workload.
     */
    nonAwsRegions?: string[];
    /**
     * The notes associated with the workload.
     */
    notes?: string;
    /**
     * An Amazon Web Services account ID.
     */
    owner?: string;
    /**
     * The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.
     */
    pillarPriorities?: string[];
    /**
     * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
     */
    reviewOwner?: string;
    /**
     * The date and time recorded.
     */
    reviewRestrictionDate?: Date;
    /**
     * A map from risk names to the count of how questions have that rating.
     */
    riskCounts?: Record<string, number>;
    shareInvitationId?: string;
    tags?: Record<string, string>;
    /**
     * The date and time recorded.
     */
    updatedAt?: Date;
    /**
     * The ARN for the workload.
     */
    workloadArn?: string;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
    /**
     * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
     */
    workloadName?: string;
}
