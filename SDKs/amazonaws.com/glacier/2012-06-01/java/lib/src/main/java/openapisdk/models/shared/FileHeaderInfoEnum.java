package openapisdk.models.shared;


public enum FileHeaderInfoEnum {
    USE("USE"),
    IGNORE("IGNORE"),
    NONE("NONE");

    public final String value;

    private FileHeaderInfoEnum(String value) {
        this.value = value;
    }
}
