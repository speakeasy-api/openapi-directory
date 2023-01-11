package openapisdk.models.shared;


public enum EntityRecognizerDataFormatEnum {
    COMPREHEND_CSV("COMPREHEND_CSV"),
    AUGMENTED_MANIFEST("AUGMENTED_MANIFEST");

    public final String value;

    private EntityRecognizerDataFormatEnum(String value) {
        this.value = value;
    }
}
