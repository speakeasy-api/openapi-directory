package openapisdk.models.shared;


public enum LastCrawlStatusEnum {
    SUCCEEDED("SUCCEEDED"),
    CANCELLED("CANCELLED"),
    FAILED("FAILED");

    public final String value;

    private LastCrawlStatusEnum(String value) {
        this.value = value;
    }
}
