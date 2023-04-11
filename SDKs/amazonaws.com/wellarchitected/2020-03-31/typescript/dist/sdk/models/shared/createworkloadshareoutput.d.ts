import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input for Create Workload Share
 */
export declare class CreateWorkloadShareOutput extends SpeakeasyBase {
    /**
     * The ID associated with the workload share.
     */
    shareId?: string;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
}
