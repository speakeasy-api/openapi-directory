import { SpeakeasyBase } from "../../../internal/utils";
import { SmsMfaConfigType } from "./smsmfaconfigtype";
import { SoftwareTokenMfaConfigType } from "./softwaretokenmfaconfigtype";
import { UserPoolMfaTypeEnum } from "./userpoolmfatypeenum";
export declare class SetUserPoolMfaConfigRequest extends SpeakeasyBase {
    mfaConfiguration?: UserPoolMfaTypeEnum;
    smsMfaConfiguration?: SmsMfaConfigType;
    softwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
    userPoolId: string;
}
