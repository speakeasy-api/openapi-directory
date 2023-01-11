package openapisdk.models.shared;


public enum ReportStateTypeEnum {
    STARTED("STARTED"),
    INPROGRESS("INPROGRESS"),
    COMPLETE("COMPLETE");

    public final String value;

    private ReportStateTypeEnum(String value) {
        this.value = value;
    }
}
