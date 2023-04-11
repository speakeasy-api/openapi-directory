import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionSummary } from "./serviceactionsummary";
/**
 * An object containing detailed information about the self-service action.
 */
export declare class ServiceActionDetail extends SpeakeasyBase {
    definition?: Record<string, string>;
    serviceActionSummary?: ServiceActionSummary;
}
