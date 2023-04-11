import { SpeakeasyBase } from "../../../internal/utils";
import { LastUpdateFailure } from "./lastupdatefailure";
import { SettingsStatusEnum } from "./settingsstatusenum";
/**
 * The status of the last <code>UpdateDatalake</code> or <code>DeleteDatalake</code> API request. This is set to Completed after the configuration is updated, or removed if deletion of the data lake is successful.
 */
export declare class UpdateStatus extends SpeakeasyBase {
    lastUpdateFailure?: LastUpdateFailure;
    lastUpdateRequestId?: string;
    lastUpdateStatus?: SettingsStatusEnum;
}
