import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaScoreSharingModeEnum } from "./mediascoresharingmodeenum";


export enum ClassAttachmentCreationTypeEnum {
    Flat = "flat",
    Link = "link",
    GoogleDrive = "googleDrive",
    Worksheet = "worksheet"
}


// ClassAttachmentCreation
/** 
 * Attachment creation for an assignment or stream post.
 * This attachment must contain a `score` or an `url`, all the details of this one will be resolved and returned as `ClassAttachment` once the assignment or stream post is created.
 * 
**/
export class ClassAttachmentCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleDriveFileId" })
  googleDriveFileId?: string;

  @SpeakeasyMetadata({ data: "json, name=lockScoreTemplate" })
  lockScoreTemplate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: string;

  @SpeakeasyMetadata({ data: "json, name=sharingMode" })
  sharingMode?: MediaScoreSharingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ClassAttachmentCreationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=worksheet" })
  worksheet?: string;
}
