import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFilterHeaderLinks } from "./reportfilterheaderlinks";
import { ReportTypeEnum } from "./reporttypeenum";
export declare class ReportFilterHeader extends SpeakeasyBase {
    links: ReportFilterHeaderLinks;
    reportFilterId: string;
    reportFilterName: string;
    reportType: ReportTypeEnum;
}
