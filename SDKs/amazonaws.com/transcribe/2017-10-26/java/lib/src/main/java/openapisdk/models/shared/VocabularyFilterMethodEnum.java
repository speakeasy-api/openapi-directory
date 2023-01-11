package openapisdk.models.shared;


public enum VocabularyFilterMethodEnum {
    REMOVE("remove"),
    MASK("mask"),
    TAG("tag");

    public final String value;

    private VocabularyFilterMethodEnum(String value) {
        this.value = value;
    }
}
