package openapisdk.models.shared;


public enum VirtualServiceStatusCodeEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    DELETED("DELETED");

    public final String value;

    private VirtualServiceStatusCodeEnum(String value) {
        this.value = value;
    }
}
