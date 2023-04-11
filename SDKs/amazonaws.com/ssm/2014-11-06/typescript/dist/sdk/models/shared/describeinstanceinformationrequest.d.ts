import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceInformationFilter } from "./instanceinformationfilter";
import { InstanceInformationStringFilter } from "./instanceinformationstringfilter";
export declare class DescribeInstanceInformationRequest extends SpeakeasyBase {
    filters?: InstanceInformationStringFilter[];
    instanceInformationFilterList?: InstanceInformationFilter[];
    maxResults?: number;
    nextToken?: string;
}
