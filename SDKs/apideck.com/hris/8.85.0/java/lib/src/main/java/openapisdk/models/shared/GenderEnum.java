package openapisdk.models.shared;


public enum GenderEnum {
    MALE("male"),
    FEMALE("female"),
    UNISEX("unisex"),
    OTHER("other"),
    NOT_SPECIFIED("not_specified");

    public final String value;

    private GenderEnum(String value) {
        this.value = value;
    }
}
