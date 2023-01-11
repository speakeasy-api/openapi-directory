package openapisdk.models.shared;


public enum ReactionEnum {
    THUMBS_UP("ThumbsUp"),
    THUMBS_DOWN("ThumbsDown");

    public final String value;

    private ReactionEnum(String value) {
        this.value = value;
    }
}
