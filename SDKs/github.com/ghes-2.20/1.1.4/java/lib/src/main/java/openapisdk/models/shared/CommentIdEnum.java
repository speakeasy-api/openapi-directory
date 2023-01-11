package openapisdk.models.shared;


public enum CommentIdEnum {
    PLUS1("+1"),
    MINUS1("-1"),
    LAUGH("laugh"),
    CONFUSED("confused"),
    HEART("heart"),
    HOORAY("hooray"),
    ROCKET("rocket"),
    EYES("eyes");

    public final String value;

    private CommentIdEnum(String value) {
        this.value = value;
    }
}
