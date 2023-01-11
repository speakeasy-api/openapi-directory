package openapisdk.models.operations;


public enum PullsSubmitReviewRequestBodyEventEnum {
    APPROVE("APPROVE"),
    REQUEST_CHANGES("REQUEST_CHANGES"),
    COMMENT("COMMENT");

    public final String value;

    private PullsSubmitReviewRequestBodyEventEnum(String value) {
        this.value = value;
    }
}
