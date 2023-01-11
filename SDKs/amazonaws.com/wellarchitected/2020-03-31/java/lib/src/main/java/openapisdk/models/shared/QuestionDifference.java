package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuestionDifference
 * A question difference return object.
**/
public class QuestionDifference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DifferenceStatus")
    public DifferenceStatusEnum differenceStatus;
    public QuestionDifference withDifferenceStatus(DifferenceStatusEnum differenceStatus) {
        this.differenceStatus = differenceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuestionId")
    public String questionId;
    public QuestionDifference withQuestionId(String questionId) {
        this.questionId = questionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuestionTitle")
    public String questionTitle;
    public QuestionDifference withQuestionTitle(String questionTitle) {
        this.questionTitle = questionTitle;
        return this;
    }
}