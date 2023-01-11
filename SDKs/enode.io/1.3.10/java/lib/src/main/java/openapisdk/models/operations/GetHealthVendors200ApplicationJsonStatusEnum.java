package openapisdk.models.operations;


public enum GetHealthVendors200ApplicationJsonStatusEnum {
    READY("READY"),
    ELEVATED_ERROR_RATE("ELEVATED_ERROR_RATE"),
    OUTAGE("OUTAGE");

    public final String value;

    private GetHealthVendors200ApplicationJsonStatusEnum(String value) {
        this.value = value;
    }
}
