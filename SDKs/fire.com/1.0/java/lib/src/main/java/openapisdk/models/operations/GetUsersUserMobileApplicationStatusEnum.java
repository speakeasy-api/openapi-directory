package openapisdk.models.operations;


public enum GetUsersUserMobileApplicationStatusEnum {
    LIVE("LIVE"),
    CLOSED("CLOSED"),
    LOCKED("LOCKED"),
    SMS_SENT("SMS_SENT");

    public final String value;

    private GetUsersUserMobileApplicationStatusEnum(String value) {
        this.value = value;
    }
}
