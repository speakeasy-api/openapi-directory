package openapisdk.models.operations;


public enum GetBatchesBatchTypesEnum {
    INTERNAL_TRANSFER("INTERNAL_TRANSFER"),
    BANK_TRANSFER("BANK_TRANSFER"),
    NEW_PAYEE("NEW_PAYEE");

    public final String value;

    private GetBatchesBatchTypesEnum(String value) {
        this.value = value;
    }
}
