package openapisdk.models.shared;


public enum MessageActionTypeEnum {
    RESEND("RESEND"),
    SUPPRESS("SUPPRESS");

    public final String value;

    private MessageActionTypeEnum(String value) {
        this.value = value;
    }
}
