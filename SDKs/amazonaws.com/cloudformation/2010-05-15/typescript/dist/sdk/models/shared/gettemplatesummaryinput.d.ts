import { SpeakeasyBase } from "../../../internal/utils";
import { CallAsEnum } from "./callasenum";
/**
 * The input for the <a>GetTemplateSummary</a> action.
 */
export declare class GetTemplateSummaryInput extends SpeakeasyBase {
    callAs?: CallAsEnum;
    stackName?: string;
    stackSetName?: string;
    templateBody?: string;
    templateURL?: string;
}
