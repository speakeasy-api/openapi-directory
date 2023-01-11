package openapisdk.models.shared;


public enum CrawlStateEnum {
    RUNNING("RUNNING"),
    CANCELLING("CANCELLING"),
    CANCELLED("CANCELLED"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private CrawlStateEnum(String value) {
        this.value = value;
    }
}
