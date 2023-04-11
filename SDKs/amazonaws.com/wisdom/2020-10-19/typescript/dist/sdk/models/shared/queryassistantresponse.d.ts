import { SpeakeasyBase } from "../../../internal/utils";
import { ResultData } from "./resultdata";
/**
 * Success
 */
export declare class QueryAssistantResponse extends SpeakeasyBase {
    nextToken?: string;
    results: ResultData[];
}
