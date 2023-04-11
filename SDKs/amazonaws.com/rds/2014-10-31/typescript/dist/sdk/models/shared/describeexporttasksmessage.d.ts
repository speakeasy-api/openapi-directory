import { SpeakeasyBase } from "../../../internal/utils";
import { ExportSourceTypeEnum } from "./exportsourcetypeenum";
import { FilterList } from "./filterlist";
export declare class DescribeExportTasksMessage extends SpeakeasyBase {
    exportTaskIdentifier?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    sourceArn?: string;
    sourceType?: ExportSourceTypeEnum;
}
