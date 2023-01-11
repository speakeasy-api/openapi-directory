package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CollectionHandle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public CollectionHandle withHandle(String handle) {
        this.handle = handle;
        return this;
    }
}