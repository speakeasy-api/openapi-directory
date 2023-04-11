import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceInformation } from "./instanceinformation";
/**
 * Success
 */
export declare class DescribeInstanceInformationResult extends SpeakeasyBase {
    instanceInformationList?: InstanceInformation[];
    nextToken?: string;
}
