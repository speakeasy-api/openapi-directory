package openapisdk.models.shared;


public enum LanguageTypeEnum {
    JAVA("JAVA"),
    PYTHON("PYTHON"),
    NODE_JS("NODE_JS"),
    RUBY("RUBY"),
    GOLANG("GOLANG"),
    DOCKER("DOCKER"),
    ANDROID("ANDROID"),
    DOTNET("DOTNET"),
    BASE("BASE"),
    PHP("PHP");

    public final String value;

    private LanguageTypeEnum(String value) {
        this.value = value;
    }
}
