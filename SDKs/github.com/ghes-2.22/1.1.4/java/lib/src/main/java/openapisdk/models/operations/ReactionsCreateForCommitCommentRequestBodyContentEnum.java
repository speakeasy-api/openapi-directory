package openapisdk.models.operations;


public enum ReactionsCreateForCommitCommentRequestBodyContentEnum {
    PLUS1("+1"),
    MINUS1("-1"),
    LAUGH("laugh"),
    CONFUSED("confused"),
    HEART("heart"),
    HOORAY("hooray"),
    ROCKET("rocket"),
    EYES("eyes");

    public final String value;

    private ReactionsCreateForCommitCommentRequestBodyContentEnum(String value) {
        this.value = value;
    }
}
