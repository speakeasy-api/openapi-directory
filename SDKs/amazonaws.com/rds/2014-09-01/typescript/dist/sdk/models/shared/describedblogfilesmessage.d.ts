import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBLogFilesMessage extends SpeakeasyBase {
    dbInstanceIdentifier: string;
    fileLastWritten?: number;
    fileSize?: number;
    filenameContains?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
