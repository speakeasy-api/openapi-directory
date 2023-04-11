import { SpeakeasyBase } from "../../../internal/utils";
import { EnabledTypeEnum } from "./enabledtypeenum";
/**
 * A user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices.
 */
export declare class UserSettings extends SpeakeasyBase {
    associatedPortalArns?: string[];
    copyAllowed?: EnabledTypeEnum;
    disconnectTimeoutInMinutes?: number;
    downloadAllowed?: EnabledTypeEnum;
    idleDisconnectTimeoutInMinutes?: number;
    pasteAllowed?: EnabledTypeEnum;
    printAllowed?: EnabledTypeEnum;
    uploadAllowed?: EnabledTypeEnum;
    userSettingsArn: string;
}
