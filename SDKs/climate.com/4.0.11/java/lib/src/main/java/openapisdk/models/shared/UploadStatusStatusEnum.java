package openapisdk.models.shared;


public enum UploadStatusStatusEnum {
    UPLOADING("UPLOADING"),
    INVALID("INVALID"),
    PENDING("PENDING"),
    INBOX("INBOX"),
    DECLINED("DECLINED"),
    IMPORTING("IMPORTING"),
    SUCCESS("SUCCESS");

    public final String value;

    private UploadStatusStatusEnum(String value) {
        this.value = value;
    }
}
