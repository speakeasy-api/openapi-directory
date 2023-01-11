import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScoreRevisionCreationDataEncodingEnum {
    Base64 = "base64"
}
/**
 * A new created revision
**/
export declare class ScoreRevisionCreation extends SpeakeasyBase {
    autosave?: boolean;
    data: string;
    dataEncoding?: ScoreRevisionCreationDataEncodingEnum;
    description?: string;
}
