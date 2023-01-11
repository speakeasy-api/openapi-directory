package openapisdk.models.operations;


public enum ListNotificationsTypeEnum {
    FILE("file"),
    FOLDER("folder"),
    SHARED_FOLDER("shared_folder"),
    SEND_RECEIPT("send_receipt"),
    SHARE_RECEIPT("share_receipt"),
    FILE_DROP("file_drop");

    public final String value;

    private ListNotificationsTypeEnum(String value) {
        this.value = value;
    }
}
