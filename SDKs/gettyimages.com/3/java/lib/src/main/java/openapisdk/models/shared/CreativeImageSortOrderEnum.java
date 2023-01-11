package openapisdk.models.shared;


public enum CreativeImageSortOrderEnum {
    BEST_MATCH("best_match"),
    MOST_POPULAR("most_popular"),
    NEWEST("newest"),
    RANDOM("random");

    public final String value;

    private CreativeImageSortOrderEnum(String value) {
        this.value = value;
    }
}
