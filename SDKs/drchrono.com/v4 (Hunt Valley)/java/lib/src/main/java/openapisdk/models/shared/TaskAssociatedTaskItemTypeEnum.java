package openapisdk.models.shared;


public enum TaskAssociatedTaskItemTypeEnum {
    PATIENT("Patient"),
    APPOINTMENT("Appointment"),
    LAB_ORDER("Lab order"),
    DOCUMENT("Document"),
    MESSAGE("Message"),
    LAB_DOCUMENT("Lab document"),
    LAB_RESULT("Lab result"),
    COMMUNICATION("Communication");

    public final String value;

    private TaskAssociatedTaskItemTypeEnum(String value) {
        this.value = value;
    }
}
