package openapisdk.models.shared;


public enum SourceTypeEnum {
    ALL("ALL"),
    ANY("ANY"),
    NONE("NONE");

    public final String value;

    private SourceTypeEnum(String value) {
        this.value = value;
    }
}
