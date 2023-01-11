package openapisdk.models.shared;


public enum ChangeTypeEnum {
    IMMEDIATE("IMMEDIATE"),
    REQUIRES_REBOOT("REQUIRES_REBOOT");

    public final String value;

    private ChangeTypeEnum(String value) {
        this.value = value;
    }
}
