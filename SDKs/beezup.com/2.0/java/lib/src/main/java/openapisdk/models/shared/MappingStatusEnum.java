package openapisdk.models.shared;


public enum MappingStatusEnum {
    REQUIRED("required"),
    OPTIONAL("optional"),
    NOT_CONFIGURABLE("notConfigurable");

    public final String value;

    private MappingStatusEnum(String value) {
        this.value = value;
    }
}
