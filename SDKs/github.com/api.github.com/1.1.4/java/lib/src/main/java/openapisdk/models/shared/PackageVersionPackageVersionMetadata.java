package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PackageVersionPackageVersionMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public PackageVersionPackageVersionMetadataContainerMetadata container;
    public PackageVersionPackageVersionMetadata withContainer(PackageVersionPackageVersionMetadataContainerMetadata container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docker")
    public PackageVersionPackageVersionMetadataDockerMetadata docker;
    public PackageVersionPackageVersionMetadata withDocker(PackageVersionPackageVersionMetadataDockerMetadata docker) {
        this.docker = docker;
        return this;
    }
    @JsonProperty("package_type")
    public PackageVersionPackageVersionMetadataPackageTypeEnum packageType;
    public PackageVersionPackageVersionMetadata withPackageType(PackageVersionPackageVersionMetadataPackageTypeEnum packageType) {
        this.packageType = packageType;
        return this;
    }
}