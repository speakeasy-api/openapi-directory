import { SpeakeasyBase } from "../../../internal/utils";
import { TimeUnitsTypeEnum } from "./timeunitstypeenum";
/**
 * The data type TokenValidityUnits specifies the time units you use when you set the duration of ID, access, and refresh tokens.
 */
export declare class TokenValidityUnitsType extends SpeakeasyBase {
    accessToken?: TimeUnitsTypeEnum;
    idToken?: TimeUnitsTypeEnum;
    refreshToken?: TimeUnitsTypeEnum;
}
