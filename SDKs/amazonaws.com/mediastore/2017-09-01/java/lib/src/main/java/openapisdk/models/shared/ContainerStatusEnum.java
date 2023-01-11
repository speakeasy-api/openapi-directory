package openapisdk.models.shared;


public enum ContainerStatusEnum {
    ACTIVE("ACTIVE"),
    CREATING("CREATING"),
    DELETING("DELETING");

    public final String value;

    private ContainerStatusEnum(String value) {
        this.value = value;
    }
}
