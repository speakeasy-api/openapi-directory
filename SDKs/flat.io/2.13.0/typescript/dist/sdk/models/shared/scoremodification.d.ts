import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreCreationTypeEnum } from "./scorecreationtypeenum";
import { ScoreLicenseEnum } from "./scorelicenseenum";
import { ScorePrivacyEnum } from "./scoreprivacyenum";
/**
 * Edit the score metadata
**/
export declare class ScoreModification extends SpeakeasyBase {
    arranger?: string;
    composer?: string;
    creationType?: ScoreCreationTypeEnum;
    description?: string;
    license?: ScoreLicenseEnum;
    licenseText?: string;
    lyricist?: string;
    privacy?: ScorePrivacyEnum;
    sharingKey?: string;
    subtitle?: string;
    tags?: string[];
    title?: string;
}
