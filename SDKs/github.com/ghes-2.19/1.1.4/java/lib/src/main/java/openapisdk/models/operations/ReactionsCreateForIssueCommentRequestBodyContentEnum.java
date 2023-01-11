package openapisdk.models.operations;


public enum ReactionsCreateForIssueCommentRequestBodyContentEnum {
    PLUS1("+1"),
    MINUS1("-1"),
    LAUGH("laugh"),
    CONFUSED("confused"),
    HEART("heart"),
    HOORAY("hooray"),
    ROCKET("rocket"),
    EYES("eyes");

    public final String value;

    private ReactionsCreateForIssueCommentRequestBodyContentEnum(String value) {
        this.value = value;
    }
}
