import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";
import { MFAOptionType } from "./mfaoptiontype";
/**
 * Represents the response from the server from the request to get information about the user.
 */
export declare class GetUserResponse extends SpeakeasyBase {
    mfaOptions?: MFAOptionType[];
    preferredMfaSetting?: string;
    userAttributes: AttributeType[];
    userMFASettingList?: string[];
    username: string;
}
