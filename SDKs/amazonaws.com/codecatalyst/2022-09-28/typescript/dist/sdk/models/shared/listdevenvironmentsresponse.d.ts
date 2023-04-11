import { SpeakeasyBase } from "../../../internal/utils";
import { DevEnvironmentSummary } from "./devenvironmentsummary";
/**
 * Success
 */
export declare class ListDevEnvironmentsResponse extends SpeakeasyBase {
    items: DevEnvironmentSummary[];
    nextToken?: string;
}
