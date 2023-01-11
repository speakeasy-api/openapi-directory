package openapisdk.models.shared;


public enum FirewallDomainListStatusEnum {
    COMPLETE("COMPLETE"),
    COMPLETE_IMPORT_FAILED("COMPLETE_IMPORT_FAILED"),
    IMPORTING("IMPORTING"),
    DELETING("DELETING"),
    UPDATING("UPDATING");

    public final String value;

    private FirewallDomainListStatusEnum(String value) {
        this.value = value;
    }
}
