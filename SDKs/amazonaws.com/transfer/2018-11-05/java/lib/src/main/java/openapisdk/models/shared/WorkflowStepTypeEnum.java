package openapisdk.models.shared;


public enum WorkflowStepTypeEnum {
    COPY("COPY"),
    CUSTOM("CUSTOM"),
    TAG("TAG"),
    DELETE("DELETE");

    public final String value;

    private WorkflowStepTypeEnum(String value) {
        this.value = value;
    }
}
