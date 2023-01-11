package openapisdk.models.shared;


public enum MessageActionEnum {
    SUPPRESS("SUPPRESS"),
    RESEND("RESEND");

    public final String value;

    private MessageActionEnum(String value) {
        this.value = value;
    }
}
