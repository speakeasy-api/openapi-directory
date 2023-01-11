package openapisdk.models.shared;


public enum VocabularyStateEnum {
    PENDING("PENDING"),
    READY("READY"),
    FAILED("FAILED");

    public final String value;

    private VocabularyStateEnum(String value) {
        this.value = value;
    }
}
