package openapisdk.models.shared;


public enum EventTypeEnum {
    SEND("SEND"),
    REJECT("REJECT"),
    BOUNCE("BOUNCE"),
    COMPLAINT("COMPLAINT"),
    DELIVERY("DELIVERY"),
    OPEN("OPEN"),
    CLICK("CLICK"),
    RENDERING_FAILURE("RENDERING_FAILURE");

    public final String value;

    private EventTypeEnum(String value) {
        this.value = value;
    }
}
