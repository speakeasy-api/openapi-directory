package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIndexResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectIdentifier")
    public String objectIdentifier;
    public CreateIndexResponse withObjectIdentifier(String objectIdentifier) {
        this.objectIdentifier = objectIdentifier;
        return this;
    }
}