package openapisdk.models.operations;


public enum UpdateAssessmentControlSetStatusRequestBodyStatusEnum {
    ACTIVE("ACTIVE"),
    UNDER_REVIEW("UNDER_REVIEW"),
    REVIEWED("REVIEWED");

    public final String value;

    private UpdateAssessmentControlSetStatusRequestBodyStatusEnum(String value) {
        this.value = value;
    }
}
