import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceCollaborator } from "./resourcecollaborator";
import { ScoreCommentsCounts } from "./scorecommentscounts";
import { ScoreCreationTypeEnum } from "./scorecreationtypeenum";
import { ScoreLicenseEnum } from "./scorelicenseenum";
import { ScoreLikesCounts } from "./scorelikescounts";
import { ScorePlaysCounts } from "./scoreplayscounts";
import { ScorePrivacyEnum } from "./scoreprivacyenum";
import { ResourceRights } from "./resourcerights";
import { UserPublicSummary } from "./userpublicsummary";
import { ScoreViewsCounts } from "./scoreviewscounts";



// ScoreDetails
/** 
 * A summary of the score details
**/
export class ScoreDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arranger" })
  arranger?: string;

  @SpeakeasyMetadata({ data: "json, name=collaborators", elemType: ResourceCollaborator })
  collaborators?: ResourceCollaborator[];

  @SpeakeasyMetadata({ data: "json, name=collections" })
  collections?: string[];

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: ScoreCommentsCounts;

  @SpeakeasyMetadata({ data: "json, name=composer" })
  composer?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=creationType" })
  creationType?: ScoreCreationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=durationTime" })
  durationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=googleDriveFileId" })
  googleDriveFileId?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlUrl" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instruments" })
  instruments?: string[];

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: ScoreLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=licenseText" })
  licenseText?: string;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes?: ScoreLikesCounts;

  @SpeakeasyMetadata({ data: "json, name=lyricist" })
  lyricist?: string;

  @SpeakeasyMetadata({ data: "json, name=mainTempoQpm" })
  mainTempoQpm?: number;

  @SpeakeasyMetadata({ data: "json, name=modificationDate" })
  modificationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=numberMeasures" })
  numberMeasures?: number;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=parentScore" })
  parentScore?: string;

  @SpeakeasyMetadata({ data: "json, name=plays" })
  plays?: ScorePlaysCounts;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: ScorePrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=publicationDate" })
  publicationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=rights" })
  rights?: ResourceRights;

  @SpeakeasyMetadata({ data: "json, name=samples" })
  samples?: string[];

  @SpeakeasyMetadata({ data: "json, name=sharingKey" })
  sharingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserPublicSummary;

  @SpeakeasyMetadata({ data: "json, name=views" })
  views?: ScoreViewsCounts;
}
