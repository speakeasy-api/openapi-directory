package openapisdk.models.shared;


public enum PatientLabResultSetStatusEnum {
    UNKNOWN(""),
    ORDER_ENTERED("Order Entered"),
    DISCONTINUED("Discontinued"),
    IN_PROGRESS("In Progress"),
    RESULTS_RECEIVED("Results Received"),
    RESULTS_REVIEWED_WITH_PATIENT("Results Reviewed with Patient"),
    PAPER_ORDER("Paper Order");

    public final String value;

    private PatientLabResultSetStatusEnum(String value) {
        this.value = value;
    }
}
