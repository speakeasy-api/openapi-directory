package openapisdk.models.shared;


public enum AggregationPeriodEnum {
    PT5_M("PT5M"),
    PT1_H("PT1H"),
    P1_D("P1D");

    public final String value;

    private AggregationPeriodEnum(String value) {
        this.value = value;
    }
}
