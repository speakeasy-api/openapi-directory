package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityRecognizerMetadataEntityTypesListItem
 * Individual item from the list of entity types in the metadata of an entity recognizer.
**/
public class EntityRecognizerMetadataEntityTypesListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationMetrics")
    public EntityTypesEvaluationMetrics evaluationMetrics;
    public EntityRecognizerMetadataEntityTypesListItem withEvaluationMetrics(EntityTypesEvaluationMetrics evaluationMetrics) {
        this.evaluationMetrics = evaluationMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfTrainMentions")
    public Long numberOfTrainMentions;
    public EntityRecognizerMetadataEntityTypesListItem withNumberOfTrainMentions(Long numberOfTrainMentions) {
        this.numberOfTrainMentions = numberOfTrainMentions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public EntityRecognizerMetadataEntityTypesListItem withType(String type) {
        this.type = type;
        return this;
    }
}