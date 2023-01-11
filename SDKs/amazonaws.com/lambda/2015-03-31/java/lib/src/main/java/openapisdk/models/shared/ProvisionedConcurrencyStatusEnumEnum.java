package openapisdk.models.shared;


public enum ProvisionedConcurrencyStatusEnumEnum {
    IN_PROGRESS("IN_PROGRESS"),
    READY("READY"),
    FAILED("FAILED");

    public final String value;

    private ProvisionedConcurrencyStatusEnumEnum(String value) {
        this.value = value;
    }
}
