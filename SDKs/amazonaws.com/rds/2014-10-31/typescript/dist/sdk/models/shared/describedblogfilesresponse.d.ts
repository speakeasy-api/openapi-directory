import { SpeakeasyBase } from "../../../internal/utils";
import { DescribeDbLogFilesList } from "./describedblogfileslist";
/**
 *  The response from a call to <code>DescribeDBLogFiles</code>.
**/
export declare class DescribeDbLogFilesResponse extends SpeakeasyBase {
    describeDBLogFiles?: DescribeDbLogFilesList[];
    marker?: string;
}
