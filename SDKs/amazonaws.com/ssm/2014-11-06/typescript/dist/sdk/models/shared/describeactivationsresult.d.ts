import { SpeakeasyBase } from "../../../internal/utils";
import { Activation } from "./activation";
/**
 * Success
 */
export declare class DescribeActivationsResult extends SpeakeasyBase {
    activationList?: Activation[];
    nextToken?: string;
}
