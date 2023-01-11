package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckDomain200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAvailable")
    public Boolean isAvailable;
    public CheckDomain200ApplicationJson withIsAvailable(Boolean isAvailable) {
        this.isAvailable = isAvailable;
        return this;
    }
}