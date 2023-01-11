package openapisdk.models.shared;


public enum IncludeEnum {
    ALL("ALL"),
    ANY("ANY"),
    NONE("NONE");

    public final String value;

    private IncludeEnum(String value) {
        this.value = value;
    }
}
