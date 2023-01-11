package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compressed_size_bytes")
    public Long compressedSizeBytes;
    public ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag withCompressedSizeBytes(Long compressedSizeBytes) {
        this.compressedSizeBytes = compressedSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifest_digest")
    public String manifestDigest;
    public ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag withManifestDigest(String manifestDigest) {
        this.manifestDigest = manifestDigest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry_name")
    public String registryName;
    public ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository_name")
    public String repositoryName;
    public ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size_bytes")
    public Long sizeBytes;
    public ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag withSizeBytes(Long sizeBytes) {
        this.sizeBytes = sizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}