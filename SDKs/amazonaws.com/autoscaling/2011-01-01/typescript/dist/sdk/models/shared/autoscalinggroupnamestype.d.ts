import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class AutoScalingGroupNamesType extends SpeakeasyBase {
    autoScalingGroupNames?: string[];
    filters?: Filter[];
    maxRecords?: number;
    nextToken?: string;
}
