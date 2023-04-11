import { SpeakeasyBase } from "../../../internal/utils";
import { TokenTypeEnum } from "./tokentypeenum";
/**
 * Success
 */
export declare class CreateTokenResponse extends SpeakeasyBase {
    token?: string;
    tokenId?: string;
    tokenType?: TokenTypeEnum;
}
