package openapisdk.models.shared;


public enum SavingsPlanRateUnitEnum {
    HRS("Hrs"),
    LAMBDA_GB_SECOND("Lambda-GB-Second"),
    REQUEST("Request");

    public final String value;

    private SavingsPlanRateUnitEnum(String value) {
        this.value = value;
    }
}
