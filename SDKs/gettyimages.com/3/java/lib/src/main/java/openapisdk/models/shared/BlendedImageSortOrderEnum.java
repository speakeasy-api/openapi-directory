package openapisdk.models.shared;


public enum BlendedImageSortOrderEnum {
    BEST_MATCH("best_match"),
    MOST_POPULAR("most_popular"),
    NEWEST("newest"),
    RANDOM("random");

    public final String value;

    private BlendedImageSortOrderEnum(String value) {
        this.value = value;
    }
}
