import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateInfoEntry } from "./updateinfoentry";
/**
 * Success
 */
export declare class DescribeUpdateDirectoryResult extends SpeakeasyBase {
    nextToken?: string;
    updateActivities?: UpdateInfoEntry[];
}
