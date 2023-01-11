package openapisdk.models.shared;


public enum RenewTypeEnum {
    NONE("None"),
    WEEKLY("Weekly"),
    MONTHLY("Monthly");

    public final String value;

    private RenewTypeEnum(String value) {
        this.value = value;
    }
}
