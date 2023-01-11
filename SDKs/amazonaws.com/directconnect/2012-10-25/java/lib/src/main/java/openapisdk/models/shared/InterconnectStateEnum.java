package openapisdk.models.shared;


public enum InterconnectStateEnum {
    REQUESTED("requested"),
    PENDING("pending"),
    AVAILABLE("available"),
    DOWN("down"),
    DELETING("deleting"),
    DELETED("deleted"),
    UNKNOWN("unknown");

    public final String value;

    private InterconnectStateEnum(String value) {
        this.value = value;
    }
}
