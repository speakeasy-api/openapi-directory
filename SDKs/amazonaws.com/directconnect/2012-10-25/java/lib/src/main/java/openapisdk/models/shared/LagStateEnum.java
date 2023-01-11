package openapisdk.models.shared;


public enum LagStateEnum {
    REQUESTED("requested"),
    PENDING("pending"),
    AVAILABLE("available"),
    DOWN("down"),
    DELETING("deleting"),
    DELETED("deleted"),
    UNKNOWN("unknown");

    public final String value;

    private LagStateEnum(String value) {
        this.value = value;
    }
}
