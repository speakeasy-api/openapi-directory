package openapisdk.models.shared;


public enum SessionConnectionStateEnum {
    CONNECTED("CONNECTED"),
    NOT_CONNECTED("NOT_CONNECTED");

    public final String value;

    private SessionConnectionStateEnum(String value) {
        this.value = value;
    }
}
