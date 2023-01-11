package openapisdk.models.shared;


public enum ImageAttributesStatusEnum {
    INVALID("invalid"),
    PROCESSING("processing"),
    UPLOADED("uploaded"),
    VALID("valid");

    public final String value;

    private ImageAttributesStatusEnum(String value) {
        this.value = value;
    }
}
