package openapisdk.models.shared;


public enum PackageVersionPackageVersionMetadataPackageTypeEnum {
    NPM("npm"),
    MAVEN("maven"),
    RUBYGEMS("rubygems"),
    DOCKER("docker"),
    NUGET("nuget"),
    CONTAINER("container");

    public final String value;

    private PackageVersionPackageVersionMetadataPackageTypeEnum(String value) {
        this.value = value;
    }
}
