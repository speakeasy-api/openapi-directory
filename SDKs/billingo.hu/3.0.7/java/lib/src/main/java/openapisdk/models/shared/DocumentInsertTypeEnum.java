package openapisdk.models.shared;


public enum DocumentInsertTypeEnum {
    ADVANCE("advance"),
    DRAFT("draft"),
    INVOICE("invoice"),
    PROFORMA("proforma");

    public final String value;

    private DocumentInsertTypeEnum(String value) {
        this.value = value;
    }
}
