import { SpeakeasyBase } from "../../../internal/utils";
import { EnabledTypeEnum } from "./enabledtypeenum";
/**
 * The summary of user settings.
 */
export declare class UserSettingsSummary extends SpeakeasyBase {
    copyAllowed?: EnabledTypeEnum;
    disconnectTimeoutInMinutes?: number;
    downloadAllowed?: EnabledTypeEnum;
    idleDisconnectTimeoutInMinutes?: number;
    pasteAllowed?: EnabledTypeEnum;
    printAllowed?: EnabledTypeEnum;
    uploadAllowed?: EnabledTypeEnum;
    userSettingsArn?: string;
}
