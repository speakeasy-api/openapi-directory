package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PackageVersionPackageVersionMetadataContainerMetadata {
    @JsonProperty("tags")
    public Object[] tags;
    public PackageVersionPackageVersionMetadataContainerMetadata withTags(Object[] tags) {
        this.tags = tags;
        return this;
    }
}