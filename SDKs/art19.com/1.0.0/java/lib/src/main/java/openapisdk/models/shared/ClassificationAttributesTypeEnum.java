package openapisdk.models.shared;


public enum ClassificationAttributesTypeEnum {
    ALTERNATE_FEED_TYPE("AlternateFeedType"),
    GENRE("Genre"),
    INDUSTRY("Industry"),
    LANGUAGE("Language"),
    MEDIA_RATING("MediaRating");

    public final String value;

    private ClassificationAttributesTypeEnum(String value) {
        this.value = value;
    }
}
