package openapisdk.models.shared;


public enum PatientDrugOrderStatusEnum {
    UNKNOWN(""),
    ORDERED("Ordered"),
    ADMINISTERED_DURING_VISIT("Administered during visit"),
    ELECTRONIC_E_RX_SENT("Electronic eRx Sent"),
    PHONED_INTO_PHARMACY("Phoned into Pharmacy"),
    FAXED_TO_PHARMACY("Faxed to Pharmacy"),
    PAPER_RX("Paper Rx"),
    PRESCRIPTION_PRINTED("Prescription Printed"),
    DISCONTINUED("Discontinued"),
    PRESCRIBED_BY_OTHER_DR("Prescribed by other Dr"),
    OVER_THE_COUNTER("Over the Counter");

    public final String value;

    private PatientDrugOrderStatusEnum(String value) {
        this.value = value;
    }
}
