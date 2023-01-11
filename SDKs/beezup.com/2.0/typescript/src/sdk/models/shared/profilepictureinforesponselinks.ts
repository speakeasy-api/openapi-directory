import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksSaveProfilePictureInfoLink } from "./linkssaveprofilepictureinfolink";
import { LinksGetProfilePictureInfoLink } from "./linksgetprofilepictureinfolink";



export class ProfilePictureInfoResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=save" })
  save: LinksSaveProfilePictureInfoLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetProfilePictureInfoLink;
}
