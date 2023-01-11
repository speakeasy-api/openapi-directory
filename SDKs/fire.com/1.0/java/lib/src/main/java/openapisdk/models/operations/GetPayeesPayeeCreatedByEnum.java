package openapisdk.models.operations;


public enum GetPayeesPayeeCreatedByEnum {
    CUSTOMER("CUSTOMER"),
    LODGEMENT("LODGEMENT"),
    DIRECT_DEBIT("DIRECT DEBIT"),
    OPEN_BANKING("OPEN BANKING"),
    FIRE_OPEN_PAYMENT("FIRE OPEN PAYMENT"),
    FIRE_DIRECT("FIRE DIRECT");

    public final String value;

    private GetPayeesPayeeCreatedByEnum(String value) {
        this.value = value;
    }
}
