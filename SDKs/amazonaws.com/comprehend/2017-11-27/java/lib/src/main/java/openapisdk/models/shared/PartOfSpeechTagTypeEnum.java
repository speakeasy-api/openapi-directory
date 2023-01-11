package openapisdk.models.shared;


public enum PartOfSpeechTagTypeEnum {
    ADJ("ADJ"),
    ADP("ADP"),
    ADV("ADV"),
    AUX("AUX"),
    CONJ("CONJ"),
    CCONJ("CCONJ"),
    DET("DET"),
    INTJ("INTJ"),
    NOUN("NOUN"),
    NUM("NUM"),
    O("O"),
    PART("PART"),
    PRON("PRON"),
    PROPN("PROPN"),
    PUNCT("PUNCT"),
    SCONJ("SCONJ"),
    SYM("SYM"),
    VERB("VERB");

    public final String value;

    private PartOfSpeechTagTypeEnum(String value) {
        this.value = value;
    }
}
