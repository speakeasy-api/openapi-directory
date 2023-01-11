package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ArtifactStore
 * <p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>
**/
public class ArtifactStore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public EncryptionKey encryptionKey;
    public ArtifactStore withEncryptionKey(EncryptionKey encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public ArtifactStore withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("type")
    public ArtifactStoreTypeEnum type;
    public ArtifactStore withType(ArtifactStoreTypeEnum type) {
        this.type = type;
        return this;
    }
}