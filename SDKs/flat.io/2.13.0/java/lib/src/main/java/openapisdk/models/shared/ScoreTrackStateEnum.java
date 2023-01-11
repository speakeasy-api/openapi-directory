package openapisdk.models.shared;


public enum ScoreTrackStateEnum {
    DRAFT("draft"),
    COMPLETED("completed"),
    DELETED("deleted");

    public final String value;

    private ScoreTrackStateEnum(String value) {
        this.value = value;
    }
}
