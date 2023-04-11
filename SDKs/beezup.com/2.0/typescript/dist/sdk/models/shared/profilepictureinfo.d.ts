import { SpeakeasyBase } from "../../../internal/utils";
import { ProfilePictureSelectedEnum } from "./profilepictureselectedenum";
export declare class ProfilePictureInfo extends SpeakeasyBase {
    /**
     * Your profile picture choice about usage of gravatar picture, initials picture or uploaded picture.
     */
    profilePictureSelected: ProfilePictureSelectedEnum;
    /**
     * Indicate the url of your picture profil
     */
    profilePictureUrl?: string;
}
