import { SpeakeasyBase } from "../../../internal/utils";
import { InputFormatEnum } from "./inputformatenum";
/**
 * Describes the documents submitted with a dataset for an entity recognizer model.
 */
export declare class DatasetEntityRecognizerDocuments extends SpeakeasyBase {
    inputFormat?: InputFormatEnum;
    s3Uri: string;
}
