package openapisdk.models.shared;


public enum EmployeeCompensationsFlsaStatusEnum {
    EXEMPT("exempt"),
    SALARIED_NONEXEMPT("salaried-nonexempt"),
    NONEXEMPT("nonexempt"),
    OWNER("owner");

    public final String value;

    private EmployeeCompensationsFlsaStatusEnum(String value) {
        this.value = value;
    }
}
