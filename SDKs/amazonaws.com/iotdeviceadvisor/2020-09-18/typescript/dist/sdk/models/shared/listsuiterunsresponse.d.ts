import { SpeakeasyBase } from "../../../internal/utils";
import { SuiteRunInformation } from "./suiteruninformation";
/**
 * Success
 */
export declare class ListSuiteRunsResponse extends SpeakeasyBase {
    nextToken?: string;
    suiteRunsList?: SuiteRunInformation[];
}
