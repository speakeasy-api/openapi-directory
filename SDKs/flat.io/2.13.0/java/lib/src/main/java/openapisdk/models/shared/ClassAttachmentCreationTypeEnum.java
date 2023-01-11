package openapisdk.models.shared;


public enum ClassAttachmentCreationTypeEnum {
    FLAT("flat"),
    LINK("link"),
    GOOGLE_DRIVE("googleDrive"),
    WORKSHEET("worksheet");

    public final String value;

    private ClassAttachmentCreationTypeEnum(String value) {
        this.value = value;
    }
}
