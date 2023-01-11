package openapisdk.models.shared;


public enum ReportStatusTypeEnum {
    GENERATING("GENERATING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    INCOMPLETE("INCOMPLETE"),
    DELETING("DELETING");

    public final String value;

    private ReportStatusTypeEnum(String value) {
        this.value = value;
    }
}
