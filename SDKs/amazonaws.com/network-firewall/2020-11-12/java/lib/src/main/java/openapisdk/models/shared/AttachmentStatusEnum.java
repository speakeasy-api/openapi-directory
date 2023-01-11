package openapisdk.models.shared;


public enum AttachmentStatusEnum {
    CREATING("CREATING"),
    DELETING("DELETING"),
    SCALING("SCALING"),
    READY("READY");

    public final String value;

    private AttachmentStatusEnum(String value) {
        this.value = value;
    }
}
