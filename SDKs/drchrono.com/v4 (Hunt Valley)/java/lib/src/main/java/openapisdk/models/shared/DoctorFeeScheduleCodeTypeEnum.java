package openapisdk.models.shared;


public enum DoctorFeeScheduleCodeTypeEnum {
    CPT("CPT"),
    HCPCS("HCPCS"),
    CUSTOM("Custom"),
    ICD9("ICD9"),
    ICD10("ICD10"),
    REVENUE("Revenue");

    public final String value;

    private DoctorFeeScheduleCodeTypeEnum(String value) {
        this.value = value;
    }
}
