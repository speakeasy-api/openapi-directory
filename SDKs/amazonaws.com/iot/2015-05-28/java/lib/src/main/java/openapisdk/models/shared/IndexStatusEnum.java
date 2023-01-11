package openapisdk.models.shared;


public enum IndexStatusEnum {
    ACTIVE("ACTIVE"),
    BUILDING("BUILDING"),
    REBUILDING("REBUILDING");

    public final String value;

    private IndexStatusEnum(String value) {
        this.value = value;
    }
}
