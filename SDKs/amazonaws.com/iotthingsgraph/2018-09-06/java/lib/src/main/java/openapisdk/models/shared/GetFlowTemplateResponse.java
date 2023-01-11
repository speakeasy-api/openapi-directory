package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFlowTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public FlowTemplateDescription description;
    public GetFlowTemplateResponse withDescription(FlowTemplateDescription description) {
        this.description = description;
        return this;
    }
}