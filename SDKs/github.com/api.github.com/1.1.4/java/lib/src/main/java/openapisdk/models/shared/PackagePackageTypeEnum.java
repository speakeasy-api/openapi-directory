package openapisdk.models.shared;


public enum PackagePackageTypeEnum {
    NPM("npm"),
    MAVEN("maven"),
    RUBYGEMS("rubygems"),
    DOCKER("docker"),
    NUGET("nuget"),
    CONTAINER("container");

    public final String value;

    private PackagePackageTypeEnum(String value) {
        this.value = value;
    }
}
