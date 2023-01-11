import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFilterLinks } from "./reportfilterlinks";
import { ReportFilterParameters } from "./reportfilterparameters";
export declare class ReportFilter extends SpeakeasyBase {
    links?: ReportFilterLinks;
    parameters: ReportFilterParameters;
    reportFilterId: string;
    reportFilterName: string;
}
