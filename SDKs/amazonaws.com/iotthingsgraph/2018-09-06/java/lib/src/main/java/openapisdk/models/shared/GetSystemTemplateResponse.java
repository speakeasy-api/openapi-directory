package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSystemTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public SystemTemplateDescription description;
    public GetSystemTemplateResponse withDescription(SystemTemplateDescription description) {
        this.description = description;
        return this;
    }
}