package openapisdk.models.shared;


public enum GenderEnum {
    MALE("MALE"),
    FEMALE("FEMALE"),
    UNSPECIFIED("UNSPECIFIED");

    public final String value;

    private GenderEnum(String value) {
        this.value = value;
    }
}
