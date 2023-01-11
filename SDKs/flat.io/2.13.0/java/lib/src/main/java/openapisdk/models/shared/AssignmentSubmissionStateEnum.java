package openapisdk.models.shared;


public enum AssignmentSubmissionStateEnum {
    CREATED("created"),
    TURNED_IN("turnedIn"),
    RETURNED("returned");

    public final String value;

    private AssignmentSubmissionStateEnum(String value) {
        this.value = value;
    }
}
