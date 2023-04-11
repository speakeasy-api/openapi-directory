import { SpeakeasyBase } from "../../../internal/utils";
import { FraudsterSummary } from "./fraudstersummary";
/**
 * Success
 */
export declare class ListFraudstersResponse extends SpeakeasyBase {
    fraudsterSummaries?: FraudsterSummary[];
    nextToken?: string;
}
