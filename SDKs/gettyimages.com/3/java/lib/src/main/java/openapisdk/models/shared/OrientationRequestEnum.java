package openapisdk.models.shared;


public enum OrientationRequestEnum {
    HORIZONTAL("horizontal"),
    VERTICAL("vertical"),
    SQUARE("square"),
    PANORAMIC_HORIZONTAL("panoramic_horizontal"),
    PANORAMIC_VERTICAL("panoramic_vertical");

    public final String value;

    private OrientationRequestEnum(String value) {
        this.value = value;
    }
}
