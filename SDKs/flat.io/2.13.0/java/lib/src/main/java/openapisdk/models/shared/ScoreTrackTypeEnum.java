package openapisdk.models.shared;


public enum ScoreTrackTypeEnum {
    AUDIO("audio"),
    SOUNDCLOUD("soundcloud"),
    YOUTUBE("youtube"),
    VIMEO("vimeo");

    public final String value;

    private ScoreTrackTypeEnum(String value) {
        this.value = value;
    }
}
