package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateObjectAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectIdentifier")
    public String objectIdentifier;
    public UpdateObjectAttributesResponse withObjectIdentifier(String objectIdentifier) {
        this.objectIdentifier = objectIdentifier;
        return this;
    }
}