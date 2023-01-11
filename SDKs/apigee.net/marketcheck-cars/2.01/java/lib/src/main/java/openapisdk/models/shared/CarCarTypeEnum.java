package openapisdk.models.shared;


public enum CarCarTypeEnum {
    NEW_("new"),
    USED("used"),
    CERTIFIED("certified");

    public final String value;

    private CarCarTypeEnum(String value) {
        this.value = value;
    }
}
