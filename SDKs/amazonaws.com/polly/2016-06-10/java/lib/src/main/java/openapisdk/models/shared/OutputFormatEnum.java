package openapisdk.models.shared;


public enum OutputFormatEnum {
    JSON("json"),
    MP3("mp3"),
    OGG_VORBIS("ogg_vorbis"),
    PCM("pcm");

    public final String value;

    private OutputFormatEnum(String value) {
        this.value = value;
    }
}
