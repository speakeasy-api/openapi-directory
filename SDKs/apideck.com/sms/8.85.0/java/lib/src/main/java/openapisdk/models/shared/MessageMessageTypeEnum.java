package openapisdk.models.shared;


public enum MessageMessageTypeEnum {
    SMS("sms"),
    MMS("mms");

    public final String value;

    private MessageMessageTypeEnum(String value) {
        this.value = value;
    }
}
