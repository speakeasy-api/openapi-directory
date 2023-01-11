package openapisdk.models.shared;


public enum VirtualInterfaceStateEnum {
    CONFIRMING("confirming"),
    VERIFYING("verifying"),
    PENDING("pending"),
    AVAILABLE("available"),
    DOWN("down"),
    DELETING("deleting"),
    DELETED("deleted"),
    REJECTED("rejected"),
    UNKNOWN("unknown");

    public final String value;

    private VirtualInterfaceStateEnum(String value) {
        this.value = value;
    }
}
