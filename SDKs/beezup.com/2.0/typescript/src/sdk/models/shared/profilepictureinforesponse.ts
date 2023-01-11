import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfilePictureInfoResponseLinks } from "./profilepictureinforesponselinks";
import { ProfilePictureInfoWithDefault } from "./profilepictureinfowithdefault";



export class ProfilePictureInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ProfilePictureInfoResponseLinks;

  @SpeakeasyMetadata({ data: "json, name=profilePictureInfo" })
  profilePictureInfo: ProfilePictureInfoWithDefault;
}
