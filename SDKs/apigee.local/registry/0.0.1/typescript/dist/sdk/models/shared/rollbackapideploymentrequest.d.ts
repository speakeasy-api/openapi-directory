import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for RollbackApiDeployment.
 */
export declare class RollbackApiDeploymentRequest extends SpeakeasyBase {
    /**
     * Required. The deployment being rolled back.
     */
    name: string;
    /**
     * Required. The revision ID to roll back to. It must be a revision of the same deployment.   Example: c7cfa2a8
     */
    revisionId: string;
}
