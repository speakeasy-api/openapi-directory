package openapisdk.models.shared;


public enum ApplyMethodEnum {
    IMMEDIATE("immediate"),
    PENDING_REBOOT("pending-reboot");

    public final String value;

    private ApplyMethodEnum(String value) {
        this.value = value;
    }
}
