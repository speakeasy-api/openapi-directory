package openapisdk.models.shared;


public enum EventTypeEnum {
    VIEWER_REQUEST("viewer-request"),
    VIEWER_RESPONSE("viewer-response"),
    ORIGIN_REQUEST("origin-request"),
    ORIGIN_RESPONSE("origin-response");

    public final String value;

    private EventTypeEnum(String value) {
        this.value = value;
    }
}
