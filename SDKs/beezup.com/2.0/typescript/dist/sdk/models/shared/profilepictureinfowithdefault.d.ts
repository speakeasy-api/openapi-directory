import { SpeakeasyBase } from "../../../internal/utils";
import { ProfilePictureSelectedEnum } from "./profilepictureselectedenum";
export declare class ProfilePictureInfoWithDefault extends SpeakeasyBase {
    /**
     * Indicate the url of your picture profil based on gravatar
     */
    gravatarProfilePictureUrl: string;
    /**
     * Indicate the url of your picture profil based on your initials
     */
    initialsProfilePictureUrl: string;
    /**
     * Your profile picture choice about usage of gravatar picture, initials picture or uploaded picture.
     */
    profilePictureSelected: ProfilePictureSelectedEnum;
    /**
     * Indicate the url of your picture profil
     */
    profilePictureUrl?: string;
}
