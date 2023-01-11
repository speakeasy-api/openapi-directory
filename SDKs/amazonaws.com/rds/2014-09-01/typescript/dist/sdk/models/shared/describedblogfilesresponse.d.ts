import { SpeakeasyBase } from "../../../internal/utils";
import { DescribeDbLogFilesList } from "./describedblogfileslist";
export declare class DescribeDbLogFilesResponse extends SpeakeasyBase {
    describeDBLogFiles?: DescribeDbLogFilesList[];
    marker?: string;
}
