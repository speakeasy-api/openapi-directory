import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterHistory } from "./parameterhistory";
/**
 * Success
 */
export declare class GetParameterHistoryResult extends SpeakeasyBase {
    nextToken?: string;
    parameters?: ParameterHistory[];
}
