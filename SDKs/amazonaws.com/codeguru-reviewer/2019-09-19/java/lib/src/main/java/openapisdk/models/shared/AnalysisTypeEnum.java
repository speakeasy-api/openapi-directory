package openapisdk.models.shared;


public enum AnalysisTypeEnum {
    SECURITY("Security"),
    CODE_QUALITY("CodeQuality");

    public final String value;

    private AnalysisTypeEnum(String value) {
        this.value = value;
    }
}
