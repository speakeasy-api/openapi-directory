package openapisdk.models.shared;


public enum DocumentNotificationStatusEnum {
    CLOSED("closed"),
    DOWNLOADED("downloaded"),
    FAILED("failed"),
    NONE("none"),
    OPENED("opened"),
    READED("readed");

    public final String value;

    private DocumentNotificationStatusEnum(String value) {
        this.value = value;
    }
}
