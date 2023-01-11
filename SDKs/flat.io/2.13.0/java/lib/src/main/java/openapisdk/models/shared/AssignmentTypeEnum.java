package openapisdk.models.shared;


public enum AssignmentTypeEnum {
    NONE("none"),
    NEW_SCORE("newScore"),
    SCORE_TEMPLATE("scoreTemplate"),
    SHARED_WRITING("sharedWriting"),
    WORKSHEET("worksheet"),
    PERFORMANCE("performance");

    public final String value;

    private AssignmentTypeEnum(String value) {
        this.value = value;
    }
}
