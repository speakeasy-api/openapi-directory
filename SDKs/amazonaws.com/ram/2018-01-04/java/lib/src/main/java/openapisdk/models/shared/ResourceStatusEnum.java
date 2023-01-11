package openapisdk.models.shared;


public enum ResourceStatusEnum {
    AVAILABLE("AVAILABLE"),
    ZONAL_RESOURCE_INACCESSIBLE("ZONAL_RESOURCE_INACCESSIBLE"),
    LIMIT_EXCEEDED("LIMIT_EXCEEDED"),
    UNAVAILABLE("UNAVAILABLE"),
    PENDING("PENDING");

    public final String value;

    private ResourceStatusEnum(String value) {
        this.value = value;
    }
}
