package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Type type;
    public GetTypeResponse withType(Type type) {
        this.type = type;
        return this;
    }
}