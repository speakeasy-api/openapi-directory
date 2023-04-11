import { SpeakeasyBase } from "../../../internal/utils";
import { InputFormatEnum } from "./inputformatenum";
/**
 * Describes the training documents submitted with an entity recognizer.
 */
export declare class EntityRecognizerDocuments extends SpeakeasyBase {
    inputFormat?: InputFormatEnum;
    s3Uri: string;
    testS3Uri?: string;
}
