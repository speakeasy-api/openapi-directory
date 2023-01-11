package openapisdk.models.shared;


public enum BodyPartEnum {
    FACE("FACE"),
    HEAD("HEAD"),
    LEFT_HAND("LEFT_HAND"),
    RIGHT_HAND("RIGHT_HAND");

    public final String value;

    private BodyPartEnum(String value) {
        this.value = value;
    }
}
