package openapisdk.models.shared;


public enum SourceTypeEnum {
    GIT("Git"),
    ZIP("Zip");

    public final String value;

    private SourceTypeEnum(String value) {
        this.value = value;
    }
}
