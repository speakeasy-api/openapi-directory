import { SpeakeasyBase } from "../../../internal/utils";
import { ProfilePictureInfoResponseLinks } from "./profilepictureinforesponselinks";
import { ProfilePictureInfoWithDefault } from "./profilepictureinfowithdefault";
/**
 * Profile picture information
 */
export declare class ProfilePictureInfoResponse extends SpeakeasyBase {
    links: ProfilePictureInfoResponseLinks;
    profilePictureInfo: ProfilePictureInfoWithDefault;
}
