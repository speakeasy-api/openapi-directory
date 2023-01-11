package openapisdk.models.shared;


public enum DocumentClassifierDataFormatEnum {
    COMPREHEND_CSV("COMPREHEND_CSV"),
    AUGMENTED_MANIFEST("AUGMENTED_MANIFEST");

    public final String value;

    private DocumentClassifierDataFormatEnum(String value) {
        this.value = value;
    }
}
