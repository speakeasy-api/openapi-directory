package openapisdk.models.shared;


public enum SpeechMarkTypeEnum {
    SENTENCE("sentence"),
    SSML("ssml"),
    VISEME("viseme"),
    WORD("word");

    public final String value;

    private SpeechMarkTypeEnum(String value) {
        this.value = value;
    }
}
