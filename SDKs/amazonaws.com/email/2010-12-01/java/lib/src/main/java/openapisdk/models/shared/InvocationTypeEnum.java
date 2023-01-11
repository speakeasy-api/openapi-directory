package openapisdk.models.shared;


public enum InvocationTypeEnum {
    EVENT("Event"),
    REQUEST_RESPONSE("RequestResponse");

    public final String value;

    private InvocationTypeEnum(String value) {
        this.value = value;
    }
}
