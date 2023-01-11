package openapisdk.models.operations;


public enum StartSpeechSynthesisTaskRequestBodyOutputFormatEnum {
    JSON("json"),
    MP3("mp3"),
    OGG_VORBIS("ogg_vorbis"),
    PCM("pcm");

    public final String value;

    private StartSpeechSynthesisTaskRequestBodyOutputFormatEnum(String value) {
        this.value = value;
    }
}
