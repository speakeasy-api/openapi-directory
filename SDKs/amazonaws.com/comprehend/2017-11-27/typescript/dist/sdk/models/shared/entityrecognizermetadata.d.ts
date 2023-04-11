import { SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerEvaluationMetrics } from "./entityrecognizerevaluationmetrics";
import { EntityRecognizerMetadataEntityTypesListItem } from "./entityrecognizermetadataentitytypeslistitem";
/**
 * Detailed information about an entity recognizer.
 */
export declare class EntityRecognizerMetadata extends SpeakeasyBase {
    entityTypes?: EntityRecognizerMetadataEntityTypesListItem[];
    evaluationMetrics?: EntityRecognizerEvaluationMetrics;
    numberOfTestDocuments?: number;
    numberOfTrainedDocuments?: number;
}
