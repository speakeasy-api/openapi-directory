import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFilterLinks } from "./reportfilterlinks";
import { ReportFilterParameters } from "./reportfilterparameters";
/**
 * Report filter
 */
export declare class ReportFilter extends SpeakeasyBase {
    /**
     * Indicates the actions you can do on this report filter
     */
    links?: ReportFilterLinks;
    parameters: ReportFilterParameters;
    /**
     * Report filter identifier
     */
    reportFilterId: string;
    /**
     * Report filter name
     */
    reportFilterName: string;
}
