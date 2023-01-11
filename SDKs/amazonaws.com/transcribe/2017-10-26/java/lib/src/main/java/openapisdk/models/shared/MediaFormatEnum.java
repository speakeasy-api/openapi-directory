package openapisdk.models.shared;


public enum MediaFormatEnum {
    MP3("mp3"),
    MP4("mp4"),
    WAV("wav"),
    FLAC("flac"),
    OGG("ogg"),
    AMR("amr"),
    WEBM("webm");

    public final String value;

    private MediaFormatEnum(String value) {
        this.value = value;
    }
}
