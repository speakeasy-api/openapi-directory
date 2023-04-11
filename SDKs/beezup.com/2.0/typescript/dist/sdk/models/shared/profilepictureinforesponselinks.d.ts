import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetProfilePictureInfoLink } from "./linksgetprofilepictureinfolink";
import { LinksSaveProfilePictureInfoLink } from "./linkssaveprofilepictureinfolink";
export declare class ProfilePictureInfoResponseLinks extends SpeakeasyBase {
    save: LinksSaveProfilePictureInfoLink;
    self: LinksGetProfilePictureInfoLink;
}
