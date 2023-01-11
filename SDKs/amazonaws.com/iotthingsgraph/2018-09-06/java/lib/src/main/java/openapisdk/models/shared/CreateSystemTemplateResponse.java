package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSystemTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public SystemTemplateSummary summary;
    public CreateSystemTemplateResponse withSummary(SystemTemplateSummary summary) {
        this.summary = summary;
        return this;
    }
}