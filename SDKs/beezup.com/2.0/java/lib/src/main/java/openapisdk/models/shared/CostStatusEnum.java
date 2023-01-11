package openapisdk.models.shared;


public enum CostStatusEnum {
    REQUIRED("required"),
    OPTIONAL("optional"),
    NOT_CONFIGURABLE("notConfigurable");

    public final String value;

    private CostStatusEnum(String value) {
        this.value = value;
    }
}
