package openapisdk.models.shared;


public enum RecrawlBehaviorEnum {
    CRAWL_EVERYTHING("CRAWL_EVERYTHING"),
    CRAWL_NEW_FOLDERS_ONLY("CRAWL_NEW_FOLDERS_ONLY");

    public final String value;

    private RecrawlBehaviorEnum(String value) {
        this.value = value;
    }
}
