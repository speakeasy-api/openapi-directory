import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFilterParameters } from "./reportfilterparameters";
export declare class SaveReportFilterRequest extends SpeakeasyBase {
    parameters: ReportFilterParameters;
    /**
     * Report filter name
     */
    reportFilterName: string;
}
