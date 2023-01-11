package openapisdk.models.shared;


public enum MediaAttachmentTypeEnum {
    RICH("rich"),
    PHOTO("photo"),
    VIDEO("video"),
    LINK("link"),
    FLAT("flat"),
    GOOGLE_DRIVE("googleDrive"),
    WORKSHEET("worksheet"),
    PERFORMANCE("performance");

    public final String value;

    private MediaAttachmentTypeEnum(String value) {
        this.value = value;
    }
}
