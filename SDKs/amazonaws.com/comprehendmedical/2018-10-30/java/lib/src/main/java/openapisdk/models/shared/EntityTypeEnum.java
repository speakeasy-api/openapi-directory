package openapisdk.models.shared;


public enum EntityTypeEnum {
    MEDICATION("MEDICATION"),
    MEDICAL_CONDITION("MEDICAL_CONDITION"),
    PROTECTED_HEALTH_INFORMATION("PROTECTED_HEALTH_INFORMATION"),
    TEST_TREATMENT_PROCEDURE("TEST_TREATMENT_PROCEDURE"),
    ANATOMY("ANATOMY"),
    TIME_EXPRESSION("TIME_EXPRESSION");

    public final String value;

    private EntityTypeEnum(String value) {
        this.value = value;
    }
}
