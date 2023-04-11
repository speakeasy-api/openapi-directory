import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeDBLogFilesMessage extends SpeakeasyBase {
    dbInstanceIdentifier: string;
    fileLastWritten?: number;
    fileSize?: number;
    filenameContains?: string;
    marker?: string;
    maxRecords?: number;
}
