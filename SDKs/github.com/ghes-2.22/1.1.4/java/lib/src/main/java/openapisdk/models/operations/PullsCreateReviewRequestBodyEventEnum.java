package openapisdk.models.operations;


public enum PullsCreateReviewRequestBodyEventEnum {
    APPROVE("APPROVE"),
    REQUEST_CHANGES("REQUEST_CHANGES"),
    COMMENT("COMMENT");

    public final String value;

    private PullsCreateReviewRequestBodyEventEnum(String value) {
        this.value = value;
    }
}
