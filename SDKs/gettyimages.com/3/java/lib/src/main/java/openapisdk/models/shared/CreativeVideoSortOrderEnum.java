package openapisdk.models.shared;


public enum CreativeVideoSortOrderEnum {
    BEST_MATCH("best_match"),
    MOST_POPULAR("most_popular"),
    NEWEST("newest"),
    RANDOM("random");

    public final String value;

    private CreativeVideoSortOrderEnum(String value) {
        this.value = value;
    }
}
