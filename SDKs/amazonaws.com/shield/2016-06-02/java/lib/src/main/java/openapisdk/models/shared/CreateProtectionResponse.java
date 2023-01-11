package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProtectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtectionId")
    public String protectionId;
    public CreateProtectionResponse withProtectionId(String protectionId) {
        this.protectionId = protectionId;
        return this;
    }
}