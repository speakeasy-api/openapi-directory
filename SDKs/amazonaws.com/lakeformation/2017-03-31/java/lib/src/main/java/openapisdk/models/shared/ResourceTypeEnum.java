package openapisdk.models.shared;


public enum ResourceTypeEnum {
    DATABASE("DATABASE"),
    TABLE("TABLE");

    public final String value;

    private ResourceTypeEnum(String value) {
        this.value = value;
    }
}
