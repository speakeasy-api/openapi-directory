import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate.
 */
export declare class EphemeralStorage extends SpeakeasyBase {
    sizeInGiB: number;
}
