package openapisdk.models.shared;


public enum AppointmentIns1StatusEnum {
    UNKNOWN(""),
    INCOMPLETE_INFORMATION("Incomplete Information"),
    IN_PROCESS_EMDEON("In Process Emdeon"),
    REJECTED_EMDEON("Rejected Emdeon"),
    REJECTED_JOPARI("Rejected Jopari"),
    IN_PROCESS_PAYOR("In Process Payor"),
    REJECTED_WAYSTAR_PROFESSIONAL("Rejected Waystar Professional"),
    REJECTED_WAYSTAR_INSTITUTIONAL("Rejected Waystar Institutional"),
    IN_PROCESS_PAYER("In Process Payer"),
    PAYER_ACKNOWLEDGED("Payer Acknowledged"),
    REJECTED_PAYOR("Rejected Payor"),
    REJECTED_PAYER("Rejected Payer"),
    PAID_IN_FULL("Paid in Full"),
    PARTIALLY_PAID("Partially Paid"),
    COORDINATION_OF_BENEFITS("Coordination of Benefits"),
    ERA_RECEIVED("ERA Received"),
    ERA_DENIED("ERA Denied"),
    HCFA_FORM_FAXED("HCFA Form Faxed");

    public final String value;

    private AppointmentIns1StatusEnum(String value) {
        this.value = value;
    }
}
