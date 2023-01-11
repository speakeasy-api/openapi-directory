package openapisdk.models.shared;


public enum ResourceStatusEnum {
    ACTIVE("ACTIVE"),
    DELETING("DELETING");

    public final String value;

    private ResourceStatusEnum(String value) {
        this.value = value;
    }
}
