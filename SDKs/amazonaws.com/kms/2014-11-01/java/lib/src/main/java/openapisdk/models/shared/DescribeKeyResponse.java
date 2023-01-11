package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyMetadata")
    public KeyMetadata keyMetadata;
    public DescribeKeyResponse withKeyMetadata(KeyMetadata keyMetadata) {
        this.keyMetadata = keyMetadata;
        return this;
    }
}