import { SpeakeasyBase } from "../../../internal/utils";
import { DescribeDBLogFilesList } from "./describedblogfileslist";
/**
 * Success
 */
export declare class DescribeDBLogFilesResponse extends SpeakeasyBase {
    describeDBLogFiles?: DescribeDBLogFilesList[];
    marker?: string;
}
