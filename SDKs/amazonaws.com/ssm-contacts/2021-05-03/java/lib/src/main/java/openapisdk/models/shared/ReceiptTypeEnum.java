package openapisdk.models.shared;


public enum ReceiptTypeEnum {
    DELIVERED("DELIVERED"),
    ERROR("ERROR"),
    READ("READ"),
    SENT("SENT"),
    STOP("STOP");

    public final String value;

    private ReceiptTypeEnum(String value) {
        this.value = value;
    }
}
