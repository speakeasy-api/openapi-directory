package openapisdk.models.shared;


public enum PipelineExecutionStartConditionEnum {
    EXPRESSION_MATCH_ONLY("EXPRESSION_MATCH_ONLY"),
    EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE("EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE");

    public final String value;

    private PipelineExecutionStartConditionEnum(String value) {
        this.value = value;
    }
}
