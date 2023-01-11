package openapisdk.models.shared;


public enum ConnectionStateEnum {
    ORDERING("ordering"),
    REQUESTED("requested"),
    PENDING("pending"),
    AVAILABLE("available"),
    DOWN("down"),
    DELETING("deleting"),
    DELETED("deleted"),
    REJECTED("rejected"),
    UNKNOWN("unknown");

    public final String value;

    private ConnectionStateEnum(String value) {
        this.value = value;
    }
}
