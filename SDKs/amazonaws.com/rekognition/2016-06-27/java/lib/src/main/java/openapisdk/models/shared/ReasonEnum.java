package openapisdk.models.shared;


public enum ReasonEnum {
    EXCEEDS_MAX_FACES("EXCEEDS_MAX_FACES"),
    EXTREME_POSE("EXTREME_POSE"),
    LOW_BRIGHTNESS("LOW_BRIGHTNESS"),
    LOW_SHARPNESS("LOW_SHARPNESS"),
    LOW_CONFIDENCE("LOW_CONFIDENCE"),
    SMALL_BOUNDING_BOX("SMALL_BOUNDING_BOX"),
    LOW_FACE_QUALITY("LOW_FACE_QUALITY");

    public final String value;

    private ReasonEnum(String value) {
        this.value = value;
    }
}
