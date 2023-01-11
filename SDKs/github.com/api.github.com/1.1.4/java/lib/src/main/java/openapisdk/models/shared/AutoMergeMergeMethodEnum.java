package openapisdk.models.shared;


public enum AutoMergeMergeMethodEnum {
    MERGE("merge"),
    SQUASH("squash"),
    REBASE("rebase");

    public final String value;

    private AutoMergeMergeMethodEnum(String value) {
        this.value = value;
    }
}
