package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportPlaybackKeyPairRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImportPlaybackKeyPairRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("publicKeyMaterial")
    public String publicKeyMaterial;
    public ImportPlaybackKeyPairRequestBody withPublicKeyMaterial(String publicKeyMaterial) {
        this.publicKeyMaterial = publicKeyMaterial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ImportPlaybackKeyPairRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}