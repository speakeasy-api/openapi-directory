package openapisdk.models.shared;


public enum ActionTypeEnum {
    PUBLISH("PUBLISH"),
    SUBSCRIBE("SUBSCRIBE"),
    RECEIVE("RECEIVE"),
    CONNECT("CONNECT");

    public final String value;

    private ActionTypeEnum(String value) {
        this.value = value;
    }
}
