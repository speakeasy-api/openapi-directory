import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output of a create workload call.
 */
export declare class CreateWorkloadOutput extends SpeakeasyBase {
    /**
     * The ARN for the workload.
     */
    workloadArn?: string;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
}
