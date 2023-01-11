package openapisdk.models.shared;


public enum PatientGenderEnum {
    UNKNOWN(""),
    MALE("Male"),
    FEMALE("Female"),
    OTHER("Other"),
    UNK("UNK"),
    ASKU("ASKU");

    public final String value;

    private PatientGenderEnum(String value) {
        this.value = value;
    }
}
