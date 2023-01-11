package openapisdk.models.shared;


public enum NotificationTransportEnum {
    EMAIL("Email"),
    SQS("SQS"),
    SNS("SNS");

    public final String value;

    private NotificationTransportEnum(String value) {
        this.value = value;
    }
}
