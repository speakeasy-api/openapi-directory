import { SpeakeasyBase } from "../../../internal/utils";
import { SMSMfaSettingsType } from "./smsmfasettingstype";
import { SoftwareTokenMfaSettingsType } from "./softwaretokenmfasettingstype";
export declare class AdminSetUserMFAPreferenceRequest extends SpeakeasyBase {
    smsMfaSettings?: SMSMfaSettingsType;
    softwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
    userPoolId: string;
    username: string;
}
