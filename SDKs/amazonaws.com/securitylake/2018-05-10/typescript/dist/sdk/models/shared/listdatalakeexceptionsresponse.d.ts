import { SpeakeasyBase } from "../../../internal/utils";
import { FailuresResponse } from "./failuresresponse";
/**
 * Success
 */
export declare class ListDatalakeExceptionsResponse extends SpeakeasyBase {
    nextToken?: string;
    nonRetryableFailures: FailuresResponse[];
}
