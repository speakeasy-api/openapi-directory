package openapisdk.models.shared;


public enum TargetTypeEnumEnum {
    INSTANCE("instance"),
    IP("ip"),
    LAMBDA("lambda");

    public final String value;

    private TargetTypeEnumEnum(String value) {
        this.value = value;
    }
}
