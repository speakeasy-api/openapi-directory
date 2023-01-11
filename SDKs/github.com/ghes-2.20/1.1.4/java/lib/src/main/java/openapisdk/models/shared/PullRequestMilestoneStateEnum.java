package openapisdk.models.shared;


public enum PullRequestMilestoneStateEnum {
    OPEN("open"),
    CLOSED("closed");

    public final String value;

    private PullRequestMilestoneStateEnum(String value) {
        this.value = value;
    }
}
