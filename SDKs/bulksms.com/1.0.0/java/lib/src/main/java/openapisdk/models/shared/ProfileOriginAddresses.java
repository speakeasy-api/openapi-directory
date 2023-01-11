package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProfileOriginAddresses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed")
    public String[] allowed;
    public ProfileOriginAddresses withAllowed(String[] allowed) {
        this.allowed = allowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isFullControlAllowed")
    public Boolean isFullControlAllowed;
    public ProfileOriginAddresses withIsFullControlAllowed(Boolean isFullControlAllowed) {
        this.isFullControlAllowed = isFullControlAllowed;
        return this;
    }
}