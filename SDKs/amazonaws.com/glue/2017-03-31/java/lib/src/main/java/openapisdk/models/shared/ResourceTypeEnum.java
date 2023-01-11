package openapisdk.models.shared;


public enum ResourceTypeEnum {
    JAR("JAR"),
    FILE("FILE"),
    ARCHIVE("ARCHIVE");

    public final String value;

    private ResourceTypeEnum(String value) {
        this.value = value;
    }
}
