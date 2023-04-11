import { SpeakeasyBase } from "../../../internal/utils";
import { SMSMfaSettingsType } from "./smsmfasettingstype";
import { SoftwareTokenMfaSettingsType } from "./softwaretokenmfasettingstype";
export declare class SetUserMFAPreferenceRequest extends SpeakeasyBase {
    accessToken: string;
    smsMfaSettings?: SMSMfaSettingsType;
    softwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
}
