package openapisdk.models.shared;


public enum SortOrderEnum {
    BEST_MATCH("best_match"),
    MOST_POPULAR("most_popular"),
    NEWEST("newest"),
    OLDEST("oldest"),
    RANDOM("random");

    public final String value;

    private SortOrderEnum(String value) {
        this.value = value;
    }
}
