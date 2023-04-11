import { SpeakeasyBase } from "../../../internal/utils";
import { OTAUpdateSummary } from "./otaupdatesummary";
/**
 * Success
 */
export declare class ListOTAUpdatesResponse extends SpeakeasyBase {
    nextToken?: string;
    otaUpdates?: OTAUpdateSummary[];
}
