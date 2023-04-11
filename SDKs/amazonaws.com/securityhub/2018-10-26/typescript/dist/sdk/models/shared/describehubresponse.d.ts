import { SpeakeasyBase } from "../../../internal/utils";
import { ControlFindingGeneratorEnum } from "./controlfindinggeneratorenum";
/**
 * Success
 */
export declare class DescribeHubResponse extends SpeakeasyBase {
    autoEnableControls?: boolean;
    controlFindingGenerator?: ControlFindingGeneratorEnum;
    hubArn?: string;
    subscribedAt?: string;
}
