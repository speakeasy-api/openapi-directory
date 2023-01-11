import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaScoreSharingModeEnum } from "./mediascoresharingmodeenum";


export enum MediaAttachmentTypeEnum {
    Rich = "rich",
    Photo = "photo",
    Video = "video",
    Link = "link",
    Flat = "flat",
    GoogleDrive = "googleDrive",
    Worksheet = "worksheet",
    Performance = "performance"
}


// MediaAttachment
/** 
 * Media attachment. The API will automatically resolve the details, oEmbed,
 * and media available if possible and return them in this object
 * 
**/
export class MediaAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorName" })
  authorName?: string;

  @SpeakeasyMetadata({ data: "json, name=authorUrl" })
  authorUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=googleDriveFileId" })
  googleDriveFileId?: string;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlHeight" })
  htmlHeight?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlWidth" })
  htmlWidth?: string;

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=lockScoreTemplate" })
  lockScoreTemplate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: string;

  @SpeakeasyMetadata({ data: "json, name=sharingMode" })
  sharingMode?: MediaScoreSharingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=thumbnailHeight" })
  thumbnailHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailWidth" })
  thumbnailWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MediaAttachmentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=worksheet" })
  worksheet?: string;
}
