package openapisdk.models.shared;


public enum AttachmentStatusEnum {
    ATTACHING("ATTACHING"),
    ATTACHED("ATTACHED"),
    DETACHING("DETACHING"),
    DETACHED("DETACHED");

    public final String value;

    private AttachmentStatusEnum(String value) {
        this.value = value;
    }
}
