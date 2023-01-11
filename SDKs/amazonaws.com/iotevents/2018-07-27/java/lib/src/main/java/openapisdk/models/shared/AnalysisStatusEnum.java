package openapisdk.models.shared;


public enum AnalysisStatusEnum {
    RUNNING("RUNNING"),
    COMPLETE("COMPLETE"),
    FAILED("FAILED");

    public final String value;

    private AnalysisStatusEnum(String value) {
        this.value = value;
    }
}
