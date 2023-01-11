package openapisdk.models.shared;


public enum ChangeTypeEnum {
    IMMEDIATE("immediate"),
    REQUIRES_REBOOT("requires-reboot");

    public final String value;

    private ChangeTypeEnum(String value) {
        this.value = value;
    }
}
