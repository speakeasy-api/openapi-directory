package openapisdk.models.operations;


public enum PullsMergeRequestBodyMergeMethodEnum {
    MERGE("merge"),
    SQUASH("squash"),
    REBASE("rebase");

    public final String value;

    private PullsMergeRequestBodyMergeMethodEnum(String value) {
        this.value = value;
    }
}
