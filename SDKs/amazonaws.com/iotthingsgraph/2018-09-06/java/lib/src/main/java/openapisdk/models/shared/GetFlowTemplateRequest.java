package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFlowTemplateRequest {
    @JsonProperty("id")
    public String id;
    public GetFlowTemplateRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionNumber")
    public Long revisionNumber;
    public GetFlowTemplateRequest withRevisionNumber(Long revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
}