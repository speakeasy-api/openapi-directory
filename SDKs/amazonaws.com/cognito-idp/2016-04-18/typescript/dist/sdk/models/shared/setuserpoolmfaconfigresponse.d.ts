import { SpeakeasyBase } from "../../../internal/utils";
import { SmsMfaConfigType } from "./smsmfaconfigtype";
import { SoftwareTokenMfaConfigType } from "./softwaretokenmfaconfigtype";
import { UserPoolMfaTypeEnum } from "./userpoolmfatypeenum";
/**
 * Success
 */
export declare class SetUserPoolMfaConfigResponse extends SpeakeasyBase {
    mfaConfiguration?: UserPoolMfaTypeEnum;
    smsMfaConfiguration?: SmsMfaConfigType;
    softwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
}
