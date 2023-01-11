import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfilePictureSelectedEnum } from "./profilepictureselectedenum";



export class ProfilePictureInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profilePictureSelected" })
  profilePictureSelected: ProfilePictureSelectedEnum;

  @SpeakeasyMetadata({ data: "json, name=profilePictureUrl" })
  profilePictureUrl?: string;
}
