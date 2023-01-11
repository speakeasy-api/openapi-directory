package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegionMapInputValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sseKmsKeyId")
    public String sseKmsKeyId;
    public RegionMapInputValue withSseKmsKeyId(String sseKmsKeyId) {
        this.sseKmsKeyId = sseKmsKeyId;
        return this;
    }
}