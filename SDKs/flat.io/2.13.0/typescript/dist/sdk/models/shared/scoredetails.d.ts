import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * A summary of the score details
**/
export declare class ScoreDetails extends SpeakeasyBase {
    arranger?: string;
    collaborators?: ResourceCollaborator[];
    collections?: string[];
    comments?: ScoreCommentsCounts;
    composer?: string;
    creationDate?: Date;
    creationType?: ScoreCreationTypeEnum;
    description?: string;
    durationTime?: number;
    googleDriveFileId?: string;
    htmlUrl?: string;
    id?: string;
    instruments?: string[];
    license?: ScoreLicenseEnum;
    licenseText?: string;
    likes?: ScoreLikesCounts;
    lyricist?: string;
    mainTempoQpm?: number;
    modificationDate?: Date;
    numberMeasures?: number;
    organization?: string;
    parentScore?: string;
    plays?: ScorePlaysCounts;
    privacy?: ScorePrivacyEnum;
    publicationDate?: Date;
    rights?: ResourceRights;
    samples?: string[];
    sharingKey?: string;
    subtitle?: string;
    tags?: string[];
    title?: string;
    user?: UserPublicSummary;
    views?: ScoreViewsCounts;
}
