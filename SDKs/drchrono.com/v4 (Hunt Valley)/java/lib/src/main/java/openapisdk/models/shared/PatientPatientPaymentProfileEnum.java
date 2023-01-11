package openapisdk.models.shared;


public enum PatientPatientPaymentProfileEnum {
    UNKNOWN(""),
    CASH("Cash"),
    INSURANCE("Insurance"),
    INSURANCE_OUT_OF_NETWORK("Insurance Out of Network"),
    AUTO_ACCIDENT("Auto Accident"),
    WORKER_S_COMP("Worker's Comp");

    public final String value;

    private PatientPatientPaymentProfileEnum(String value) {
        this.value = value;
    }
}
