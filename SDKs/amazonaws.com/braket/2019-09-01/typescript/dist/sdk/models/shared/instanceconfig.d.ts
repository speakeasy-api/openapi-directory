import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
/**
 * Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.
 */
export declare class InstanceConfig extends SpeakeasyBase {
    instanceCount?: number;
    instanceType: InstanceTypeEnum;
    volumeSizeInGb: number;
}
