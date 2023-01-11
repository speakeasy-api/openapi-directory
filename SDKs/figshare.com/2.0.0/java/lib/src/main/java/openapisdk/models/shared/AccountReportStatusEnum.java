package openapisdk.models.shared;


public enum AccountReportStatusEnum {
    MISSING("missing"),
    PENDING("pending"),
    DONE("done");

    public final String value;

    private AccountReportStatusEnum(String value) {
        this.value = value;
    }
}
