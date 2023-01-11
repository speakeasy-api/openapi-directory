package openapisdk.models.shared;


public enum InteractionModeEnum {
    INTERACTIVE("INTERACTIVE"),
    NO_VIDEO("NO_VIDEO"),
    VIDEO_ONLY("VIDEO_ONLY");

    public final String value;

    private InteractionModeEnum(String value) {
        this.value = value;
    }
}
