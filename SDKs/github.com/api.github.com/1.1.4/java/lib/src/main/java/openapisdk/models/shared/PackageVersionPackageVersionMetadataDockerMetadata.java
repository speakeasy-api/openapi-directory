package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PackageVersionPackageVersionMetadataDockerMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public Object[] tag;
    public PackageVersionPackageVersionMetadataDockerMetadata withTag(Object[] tag) {
        this.tag = tag;
        return this;
    }
}