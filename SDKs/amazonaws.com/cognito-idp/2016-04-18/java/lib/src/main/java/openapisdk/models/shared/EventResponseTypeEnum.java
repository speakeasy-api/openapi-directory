package openapisdk.models.shared;


public enum EventResponseTypeEnum {
    SUCCESS("Success"),
    FAILURE("Failure");

    public final String value;

    private EventResponseTypeEnum(String value) {
        this.value = value;
    }
}
