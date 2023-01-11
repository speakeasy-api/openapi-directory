package openapisdk.models.shared;


public enum EventTypeEnum {
    SEND("send"),
    REJECT("reject"),
    BOUNCE("bounce"),
    COMPLAINT("complaint"),
    DELIVERY("delivery"),
    OPEN("open"),
    CLICK("click"),
    RENDERING_FAILURE("renderingFailure");

    public final String value;

    private EventTypeEnum(String value) {
        this.value = value;
    }
}
