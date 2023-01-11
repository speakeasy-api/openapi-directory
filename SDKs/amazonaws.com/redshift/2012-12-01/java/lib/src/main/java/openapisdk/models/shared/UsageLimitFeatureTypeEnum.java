package openapisdk.models.shared;


public enum UsageLimitFeatureTypeEnum {
    SPECTRUM("spectrum"),
    CONCURRENCY_SCALING("concurrency-scaling");

    public final String value;

    private UsageLimitFeatureTypeEnum(String value) {
        this.value = value;
    }
}
