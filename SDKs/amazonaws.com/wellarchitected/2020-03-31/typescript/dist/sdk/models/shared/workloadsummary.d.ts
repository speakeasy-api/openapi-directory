import { SpeakeasyBase } from "../../../internal/utils";
import { WorkloadImprovementStatusEnum } from "./workloadimprovementstatusenum";
/**
 * A workload summary return object.
 */
export declare class WorkloadSummary extends SpeakeasyBase {
    /**
     * The improvement status for a workload.
     */
    improvementStatus?: WorkloadImprovementStatusEnum;
    /**
     * The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.
     */
    lenses?: string[];
    /**
     * An Amazon Web Services account ID.
     */
    owner?: string;
    /**
     * A map from risk names to the count of how questions have that rating.
     */
    riskCounts?: Record<string, number>;
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
