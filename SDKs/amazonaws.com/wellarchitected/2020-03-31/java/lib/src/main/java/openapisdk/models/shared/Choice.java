package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Choice
 * A choice available to answer question.
**/
public class Choice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChoiceId")
    public String choiceId;
    public Choice withChoiceId(String choiceId) {
        this.choiceId = choiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Choice withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public Choice withTitle(String title) {
        this.title = title;
        return this;
    }
}