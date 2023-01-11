package openapisdk.models.shared;


public enum ChoiceReasonEnum {
    OUT_OF_SCOPE("OUT_OF_SCOPE"),
    BUSINESS_PRIORITIES("BUSINESS_PRIORITIES"),
    ARCHITECTURE_CONSTRAINTS("ARCHITECTURE_CONSTRAINTS"),
    OTHER("OTHER"),
    NONE("NONE");

    public final String value;

    private ChoiceReasonEnum(String value) {
        this.value = value;
    }
}
