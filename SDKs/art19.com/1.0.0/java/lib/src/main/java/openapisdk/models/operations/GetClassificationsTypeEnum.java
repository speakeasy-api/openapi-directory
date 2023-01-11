package openapisdk.models.operations;


public enum GetClassificationsTypeEnum {
    ALTERNATE_FEED_TYPE("AlternateFeedType"),
    GENRE("Genre"),
    INDUSTRY("Industry"),
    LANGUAGE("Language"),
    MEDIA_RATING("MediaRating");

    public final String value;

    private GetClassificationsTypeEnum(String value) {
        this.value = value;
    }
}
