import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfilePictureSelectedEnum } from "./profilepictureselectedenum";



export class ProfilePictureInfoWithDefault extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gravatarProfilePictureUrl" })
  gravatarProfilePictureUrl: string;

  @SpeakeasyMetadata({ data: "json, name=initialsProfilePictureUrl" })
  initialsProfilePictureUrl: string;

  @SpeakeasyMetadata({ data: "json, name=profilePictureSelected" })
  profilePictureSelected: ProfilePictureSelectedEnum;

  @SpeakeasyMetadata({ data: "json, name=profilePictureUrl" })
  profilePictureUrl?: string;
}
