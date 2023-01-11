package openapisdk.models.shared;


public enum EnvironmentAccessTypeEnum {
    FULL("full"),
    READ_ONLY("readOnly"),
    NONE("none");

    public final String value;

    private EnvironmentAccessTypeEnum(String value) {
        this.value = value;
    }
}
