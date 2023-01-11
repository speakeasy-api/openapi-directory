package openapisdk.models.shared;


public enum BillingLineItemBillingStatusEnum {
    UNKNOWN(""),
    INCOMPLETE_INFORMATION("Incomplete Information"),
    IN_PROCESS_EMDEON("In Process Emdeon"),
    IN_PROCESS_I_HCFA("In Process iHCFA"),
    IN_PROCESS_GATEWAY("In Process Gateway"),
    IN_PROCESS_JOPARI("In Process Jopari"),
    IN_PROCESS_WAYSTAR("In Process Waystar"),
    REJECTED_EMDEON("Rejected Emdeon"),
    REJECTED_I_HCFA("Rejected iHCFA"),
    REJECTED_GATEWAY("Rejected Gateway"),
    REJECTED_JOPARI("Rejected Jopari"),
    REJECTED_WAYSTAR("Rejected Waystar"),
    IN_PROCESS_PAYER("In Process Payer"),
    PAYER_ACKNOWLEDGED("Payer Acknowledged"),
    REJECTED_PAYER("Rejected Payer"),
    PAID_IN_FULL("Paid in Full"),
    PARTIALLY_PAID("Partially Paid"),
    COORDINATION_OF_BENEFITS("Coordination of Benefits"),
    ERA_RECEIVED("ERA Received"),
    ERA_DENIED("ERA Denied");

    public final String value;

    private BillingLineItemBillingStatusEnum(String value) {
        this.value = value;
    }
}
