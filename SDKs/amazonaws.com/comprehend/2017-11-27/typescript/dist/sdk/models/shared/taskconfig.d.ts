import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassificationConfig } from "./documentclassificationconfig";
import { EntityRecognitionConfig } from "./entityrecognitionconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
/**
 * Configuration about the custom classifier associated with the flywheel.
 */
export declare class TaskConfig extends SpeakeasyBase {
    documentClassificationConfig?: DocumentClassificationConfig;
    entityRecognitionConfig?: EntityRecognitionConfig;
    languageCode: LanguageCodeEnum;
}
