package openapisdk.models.shared;


public enum AggregatedSourceStatusTypeEnum {
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED"),
    OUTDATED("OUTDATED");

    public final String value;

    private AggregatedSourceStatusTypeEnum(String value) {
        this.value = value;
    }
}
