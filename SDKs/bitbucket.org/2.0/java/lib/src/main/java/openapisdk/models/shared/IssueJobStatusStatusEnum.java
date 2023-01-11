package openapisdk.models.shared;


public enum IssueJobStatusStatusEnum {
    ACCEPTED("ACCEPTED"),
    STARTED("STARTED"),
    RUNNING("RUNNING"),
    FAILURE("FAILURE");

    public final String value;

    private IssueJobStatusStatusEnum(String value) {
        this.value = value;
    }
}
