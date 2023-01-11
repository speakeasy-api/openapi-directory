package openapisdk.models.shared;


public enum AttributeNameEnum {
    SIGN("SIGN"),
    SYMPTOM("SYMPTOM"),
    DIAGNOSIS("DIAGNOSIS"),
    NEGATION("NEGATION");

    public final String value;

    private AttributeNameEnum(String value) {
        this.value = value;
    }
}
