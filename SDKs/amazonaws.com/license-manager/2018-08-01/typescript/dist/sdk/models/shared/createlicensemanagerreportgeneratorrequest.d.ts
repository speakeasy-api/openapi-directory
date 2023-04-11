import { SpeakeasyBase } from "../../../internal/utils";
import { ReportContext } from "./reportcontext";
import { ReportFrequency } from "./reportfrequency";
import { ReportTypeEnum } from "./reporttypeenum";
import { Tag } from "./tag";
export declare class CreateLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    reportContext: ReportContext;
    reportFrequency: ReportFrequency;
    reportGeneratorName: string;
    tags?: Tag[];
    type: ReportTypeEnum[];
}
