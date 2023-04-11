import { SpeakeasyBase } from "../../../internal/utils";
import { InputSummary } from "./inputsummary";
/**
 * Success
 */
export declare class ListInputsResponse extends SpeakeasyBase {
    inputSummaries?: InputSummary[];
    nextToken?: string;
}
