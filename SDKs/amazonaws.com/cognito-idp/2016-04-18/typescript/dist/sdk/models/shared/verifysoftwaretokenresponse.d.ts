import { SpeakeasyBase } from "../../../internal/utils";
import { VerifySoftwareTokenResponseTypeEnum } from "./verifysoftwaretokenresponsetypeenum";
/**
 * Success
 */
export declare class VerifySoftwareTokenResponse extends SpeakeasyBase {
    session?: string;
    status?: VerifySoftwareTokenResponseTypeEnum;
}
