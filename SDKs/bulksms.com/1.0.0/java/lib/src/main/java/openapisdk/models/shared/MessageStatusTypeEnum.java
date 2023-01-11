package openapisdk.models.shared;


public enum MessageStatusTypeEnum {
    ACCEPTED("ACCEPTED"),
    SCHEDULED("SCHEDULED"),
    SENT("SENT"),
    DELIVERED("DELIVERED"),
    UNKNOWN("UNKNOWN"),
    FAILED("FAILED");

    public final String value;

    private MessageStatusTypeEnum(String value) {
        this.value = value;
    }
}
