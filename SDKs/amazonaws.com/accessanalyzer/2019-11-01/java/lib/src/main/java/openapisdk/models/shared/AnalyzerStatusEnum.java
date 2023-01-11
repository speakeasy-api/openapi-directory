package openapisdk.models.shared;


public enum AnalyzerStatusEnum {
    ACTIVE("ACTIVE"),
    CREATING("CREATING"),
    DISABLED("DISABLED"),
    FAILED("FAILED");

    public final String value;

    private AnalyzerStatusEnum(String value) {
        this.value = value;
    }
}
