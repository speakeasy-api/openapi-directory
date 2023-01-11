package openapisdk.models.operations;


public enum CreateMetricSetRequestBodyMetricSetFrequencyEnum {
    P1_D("P1D"),
    PT1_H("PT1H"),
    PT10_M("PT10M"),
    PT5_M("PT5M");

    public final String value;

    private CreateMetricSetRequestBodyMetricSetFrequencyEnum(String value) {
        this.value = value;
    }
}
