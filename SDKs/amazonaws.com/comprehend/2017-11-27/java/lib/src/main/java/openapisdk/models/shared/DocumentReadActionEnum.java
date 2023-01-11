package openapisdk.models.shared;


public enum DocumentReadActionEnum {
    TEXTRACT_DETECT_DOCUMENT_TEXT("TEXTRACT_DETECT_DOCUMENT_TEXT"),
    TEXTRACT_ANALYZE_DOCUMENT("TEXTRACT_ANALYZE_DOCUMENT");

    public final String value;

    private DocumentReadActionEnum(String value) {
        this.value = value;
    }
}
