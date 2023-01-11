package openapisdk.models.operations;


public enum SynthesizeSpeechRequestBodyOutputFormatEnum {
    JSON("json"),
    MP3("mp3"),
    OGG_VORBIS("ogg_vorbis"),
    PCM("pcm");

    public final String value;

    private SynthesizeSpeechRequestBodyOutputFormatEnum(String value) {
        this.value = value;
    }
}
