package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CopyProductOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CopyProductToken")
    public String copyProductToken;
    public CopyProductOutput withCopyProductToken(String copyProductToken) {
        this.copyProductToken = copyProductToken;
        return this;
    }
}