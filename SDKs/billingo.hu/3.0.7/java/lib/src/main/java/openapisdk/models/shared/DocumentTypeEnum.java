package openapisdk.models.shared;


public enum DocumentTypeEnum {
    ADVANCE("advance"),
    CANCELED("canceled"),
    CANCELLATION("cancellation"),
    DRAFT("draft"),
    INVOICE("invoice"),
    PROFORMA("proforma");

    public final String value;

    private DocumentTypeEnum(String value) {
        this.value = value;
    }
}
