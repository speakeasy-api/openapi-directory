package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateKeyPairRequest {
    @JsonProperty("keyPairName")
    public String keyPairName;
    public CreateKeyPairRequest withKeyPairName(String keyPairName) {
        this.keyPairName = keyPairName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateKeyPairRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}