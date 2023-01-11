package openapisdk.models.shared;


public enum PackageTypeEnum {
    NPM("npm"),
    MAVEN("maven"),
    RUBYGEMS("rubygems"),
    DOCKER("docker"),
    NUGET("nuget"),
    CONTAINER("container");

    public final String value;

    private PackageTypeEnum(String value) {
        this.value = value;
    }
}
