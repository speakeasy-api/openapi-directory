package openapisdk.models.shared;


public enum ImageStatusEnum {
    PENDING("PENDING"),
    CREATING("CREATING"),
    BUILDING("BUILDING"),
    TESTING("TESTING"),
    DISTRIBUTING("DISTRIBUTING"),
    INTEGRATING("INTEGRATING"),
    AVAILABLE("AVAILABLE"),
    CANCELLED("CANCELLED"),
    FAILED("FAILED"),
    DEPRECATED("DEPRECATED"),
    DELETED("DELETED");

    public final String value;

    private ImageStatusEnum(String value) {
        this.value = value;
    }
}
