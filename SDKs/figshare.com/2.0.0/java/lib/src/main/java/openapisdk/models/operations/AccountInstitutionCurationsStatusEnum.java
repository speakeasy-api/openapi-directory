package openapisdk.models.operations;


public enum AccountInstitutionCurationsStatusEnum {
    PENDING("pending"),
    APPROVED("approved"),
    REJECTED("rejected"),
    CLOSED("closed");

    public final String value;

    private AccountInstitutionCurationsStatusEnum(String value) {
        this.value = value;
    }
}
