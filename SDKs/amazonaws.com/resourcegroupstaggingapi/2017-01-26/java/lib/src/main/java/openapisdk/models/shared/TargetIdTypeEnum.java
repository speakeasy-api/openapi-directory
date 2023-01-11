package openapisdk.models.shared;


public enum TargetIdTypeEnum {
    ACCOUNT("ACCOUNT"),
    OU("OU"),
    ROOT("ROOT");

    public final String value;

    private TargetIdTypeEnum(String value) {
        this.value = value;
    }
}
