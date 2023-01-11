package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFlowTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public FlowTemplateSummary summary;
    public CreateFlowTemplateResponse withSummary(FlowTemplateSummary summary) {
        this.summary = summary;
        return this;
    }
}