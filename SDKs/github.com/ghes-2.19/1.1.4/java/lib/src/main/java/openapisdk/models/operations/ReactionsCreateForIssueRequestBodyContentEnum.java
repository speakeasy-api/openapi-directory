package openapisdk.models.operations;


public enum ReactionsCreateForIssueRequestBodyContentEnum {
    PLUS1("+1"),
    MINUS1("-1"),
    LAUGH("laugh"),
    CONFUSED("confused"),
    HEART("heart"),
    HOORAY("hooray"),
    ROCKET("rocket"),
    EYES("eyes");

    public final String value;

    private ReactionsCreateForIssueRequestBodyContentEnum(String value) {
        this.value = value;
    }
}
