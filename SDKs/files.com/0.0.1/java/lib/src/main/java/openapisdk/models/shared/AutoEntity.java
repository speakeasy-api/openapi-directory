package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutoEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamic")
    public java.util.Map<String, Object> dynamic;
    public AutoEntity withDynamic(java.util.Map<String, Object> dynamic) {
        this.dynamic = dynamic;
        return this;
    }
}