import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFilterHeaderLinks } from "./reportfilterheaderlinks";
import { ReportTypeEnum } from "./reporttypeenum";
export declare class ReportFilterHeader extends SpeakeasyBase {
    links: ReportFilterHeaderLinks;
    /**
     * Report filter identifier
     */
    reportFilterId: string;
    /**
     * Report filter name
     */
    reportFilterName: string;
    /**
     * The report type
     */
    reportType: ReportTypeEnum;
}
