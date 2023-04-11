import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input structure for the GetStatus operation.
 */
export declare class GetStatusInput extends SpeakeasyBase {
    /**
     * Specifies the version of the client tool.
     */
    apiVersion?: string;
    /**
     * A unique identifier which refers to a particular job.
     */
    jobId: string;
}
