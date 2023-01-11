package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PillarDifference
 * A pillar difference return object.
**/
public class PillarDifference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DifferenceStatus")
    public DifferenceStatusEnum differenceStatus;
    public PillarDifference withDifferenceStatus(DifferenceStatusEnum differenceStatus) {
        this.differenceStatus = differenceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PillarId")
    public String pillarId;
    public PillarDifference withPillarId(String pillarId) {
        this.pillarId = pillarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuestionDifferences")
    public QuestionDifference[] questionDifferences;
    public PillarDifference withQuestionDifferences(QuestionDifference[] questionDifferences) {
        this.questionDifferences = questionDifferences;
        return this;
    }
}