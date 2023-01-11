package openapisdk.models.shared;


public enum ProvisionedProductPlanStatusEnum {
    CREATE_IN_PROGRESS("CREATE_IN_PROGRESS"),
    CREATE_SUCCESS("CREATE_SUCCESS"),
    CREATE_FAILED("CREATE_FAILED"),
    EXECUTE_IN_PROGRESS("EXECUTE_IN_PROGRESS"),
    EXECUTE_SUCCESS("EXECUTE_SUCCESS"),
    EXECUTE_FAILED("EXECUTE_FAILED");

    public final String value;

    private ProvisionedProductPlanStatusEnum(String value) {
        this.value = value;
    }
}
