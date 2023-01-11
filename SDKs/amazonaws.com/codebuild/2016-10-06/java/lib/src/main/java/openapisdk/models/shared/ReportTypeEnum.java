package openapisdk.models.shared;


public enum ReportTypeEnum {
    TEST("TEST"),
    CODE_COVERAGE("CODE_COVERAGE");

    public final String value;

    private ReportTypeEnum(String value) {
        this.value = value;
    }
}
