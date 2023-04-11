import { SpeakeasyBase } from "../../../internal/utils";
import { ActionStatusEnum } from "./actionstatusenum";
/**
 * Request to list an environment's upcoming and in-progress managed actions.
 */
export declare class DescribeEnvironmentManagedActionsRequest extends SpeakeasyBase {
    environmentId?: string;
    environmentName?: string;
    status?: ActionStatusEnum;
}
