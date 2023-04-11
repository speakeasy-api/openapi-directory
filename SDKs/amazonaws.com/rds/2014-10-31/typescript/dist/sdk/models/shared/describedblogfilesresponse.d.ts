import { SpeakeasyBase } from "../../../internal/utils";
import { DescribeDBLogFilesList } from "./describedblogfileslist";
/**
 * The response from a call to <code>DescribeDBLogFiles</code>.
 */
export declare class DescribeDBLogFilesResponse extends SpeakeasyBase {
    describeDBLogFiles?: DescribeDBLogFilesList[];
    marker?: string;
}
