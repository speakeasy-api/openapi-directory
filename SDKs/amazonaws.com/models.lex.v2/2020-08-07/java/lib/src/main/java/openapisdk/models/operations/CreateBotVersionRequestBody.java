package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBotVersionRequestBody {
    @JsonProperty("botVersionLocaleSpecification")
    public java.util.Map<String, openapisdk.models.shared.BotVersionLocaleDetails> botVersionLocaleSpecification;
    public CreateBotVersionRequestBody withBotVersionLocaleSpecification(java.util.Map<String, openapisdk.models.shared.BotVersionLocaleDetails> botVersionLocaleSpecification) {
        this.botVersionLocaleSpecification = botVersionLocaleSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateBotVersionRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
}