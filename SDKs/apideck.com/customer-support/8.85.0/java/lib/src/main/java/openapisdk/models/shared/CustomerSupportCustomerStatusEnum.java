package openapisdk.models.shared;


public enum CustomerSupportCustomerStatusEnum {
    ACTIVE("active"),
    ARCHIVED("archived"),
    GDPR_ERASURE_REQUEST("gdpr-erasure-request"),
    UNKNOWN("unknown");

    public final String value;

    private CustomerSupportCustomerStatusEnum(String value) {
        this.value = value;
    }
}
