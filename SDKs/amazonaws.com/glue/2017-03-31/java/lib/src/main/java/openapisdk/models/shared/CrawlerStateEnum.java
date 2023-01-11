package openapisdk.models.shared;


public enum CrawlerStateEnum {
    READY("READY"),
    RUNNING("RUNNING"),
    STOPPING("STOPPING");

    public final String value;

    private CrawlerStateEnum(String value) {
        this.value = value;
    }
}
