package openapisdk.models.shared;


public enum JobStatusEnum {
    DRAFT("draft"),
    INTERNAL("internal"),
    PUBLISHED("published"),
    COMPLETED("completed"),
    ON_HOLD("on-hold"),
    PRIVATE_("private");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
