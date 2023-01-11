package openapisdk.models.shared;


public enum AppointmentStatusEnum {
    UNKNOWN(""),
    ARRIVED("Arrived"),
    CHECKED_IN("Checked In"),
    CHECKED_IN_ONLINE("Checked In Online"),
    IN_ROOM("In Room"),
    IN_SESSION("In Session"),
    COMPLETE("Complete"),
    CONFIRMED("Confirmed"),
    NOT_CONFIRMED("Not Confirmed"),
    RESCHEDULED("Rescheduled"),
    CANCELLED("Cancelled"),
    NO_SHOW("No Show");

    public final String value;

    private AppointmentStatusEnum(String value) {
        this.value = value;
    }
}
