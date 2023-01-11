package openapisdk.models.shared;


public enum StudentGenderEnum {
    M("M"),
    F("F"),
    UNKNOWN("");

    public final String value;

    private StudentGenderEnum(String value) {
        this.value = value;
    }
}
