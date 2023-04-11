import { SpeakeasyBase } from "../../../internal/utils";
import { ReportExportConfig } from "./reportexportconfig";
import { ReportTypeEnum } from "./reporttypeenum";
import { Tag } from "./tag";
export declare class CreateReportGroupInput extends SpeakeasyBase {
    exportConfig: ReportExportConfig;
    name: string;
    tags?: Tag[];
    type: ReportTypeEnum;
}
