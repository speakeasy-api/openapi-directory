import { SpeakeasyBase } from "../../../internal/utils";
import { CaseSummary } from "./casesummary";
/**
 * Success
 */
export declare class ListCasesForContactResponse extends SpeakeasyBase {
    cases: CaseSummary[];
    nextToken?: string;
}
