package openapisdk.models.operations;


public enum GetUsersUserStatusEnum {
    LIVE("LIVE"),
    CLOSED("CLOSED"),
    FROZEN("FROZEN"),
    INVITE_SENT("INVITE_SENT"),
    SMS_CODE_SENT("SMS_CODE_SENT");

    public final String value;

    private GetUsersUserStatusEnum(String value) {
        this.value = value;
    }
}
