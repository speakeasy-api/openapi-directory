package openapisdk.models.shared;


public enum DynamicGroupStatusEnum {
    ACTIVE("ACTIVE"),
    BUILDING("BUILDING"),
    REBUILDING("REBUILDING");

    public final String value;

    private DynamicGroupStatusEnum(String value) {
        this.value = value;
    }
}
