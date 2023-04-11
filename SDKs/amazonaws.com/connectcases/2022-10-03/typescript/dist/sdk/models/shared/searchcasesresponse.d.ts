import { SpeakeasyBase } from "../../../internal/utils";
import { SearchCasesResponseItem } from "./searchcasesresponseitem";
/**
 * Success
 */
export declare class SearchCasesResponse extends SpeakeasyBase {
    cases: SearchCasesResponseItem[];
    nextToken?: string;
}
