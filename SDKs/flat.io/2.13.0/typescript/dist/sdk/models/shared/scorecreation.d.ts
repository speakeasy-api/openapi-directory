import { SpeakeasyBase } from "../../../internal/utils";
import { ScorePrivacyEnum } from "./scoreprivacyenum";
import { ScoreSource } from "./scoresource";
export declare enum ScoreCreationDataEncodingEnum {
    Base64 = "base64"
}
/**
 * A new created score
**/
export declare class ScoreCreation extends SpeakeasyBase {
    collection?: string;
    data?: string;
    dataEncoding?: ScoreCreationDataEncodingEnum;
    filename?: string;
    googleDriveFolder?: string;
    privacy: ScorePrivacyEnum;
    source?: ScoreSource;
    title?: string;
}
