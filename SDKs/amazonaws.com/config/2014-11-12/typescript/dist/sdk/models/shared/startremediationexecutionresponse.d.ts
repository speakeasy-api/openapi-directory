import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceKey } from "./resourcekey";
/**
 * Success
 */
export declare class StartRemediationExecutionResponse extends SpeakeasyBase {
    failedItems?: ResourceKey[];
    failureMessage?: string;
}
