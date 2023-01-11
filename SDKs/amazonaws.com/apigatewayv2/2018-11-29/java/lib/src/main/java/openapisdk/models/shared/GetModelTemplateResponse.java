package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetModelTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public java.util.Map<String, Object> value;
    public GetModelTemplateResponse withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}