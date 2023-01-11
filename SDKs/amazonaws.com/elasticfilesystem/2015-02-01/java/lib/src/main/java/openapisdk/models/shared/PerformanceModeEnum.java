package openapisdk.models.shared;


public enum PerformanceModeEnum {
    GENERAL_PURPOSE("generalPurpose"),
    MAX_IO("maxIO");

    public final String value;

    private PerformanceModeEnum(String value) {
        this.value = value;
    }
}
