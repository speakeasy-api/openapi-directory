package openapisdk.models.operations;


public enum UpdateAnswerRequestBodyReasonEnum {
    OUT_OF_SCOPE("OUT_OF_SCOPE"),
    BUSINESS_PRIORITIES("BUSINESS_PRIORITIES"),
    ARCHITECTURE_CONSTRAINTS("ARCHITECTURE_CONSTRAINTS"),
    OTHER("OTHER"),
    NONE("NONE");

    public final String value;

    private UpdateAnswerRequestBodyReasonEnum(String value) {
        this.value = value;
    }
}
