package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubmitFeedbackRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public SubmitFeedbackRequestBody withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("type")
    public SubmitFeedbackRequestBodyTypeEnum type;
    public SubmitFeedbackRequestBody withType(SubmitFeedbackRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}