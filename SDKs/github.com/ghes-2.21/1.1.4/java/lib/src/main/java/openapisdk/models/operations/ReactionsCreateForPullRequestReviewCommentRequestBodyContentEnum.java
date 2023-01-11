package openapisdk.models.operations;


public enum ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum {
    PLUS1("+1"),
    MINUS1("-1"),
    LAUGH("laugh"),
    CONFUSED("confused"),
    HEART("heart"),
    HOORAY("hooray"),
    ROCKET("rocket"),
    EYES("eyes");

    public final String value;

    private ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum(String value) {
        this.value = value;
    }
}
