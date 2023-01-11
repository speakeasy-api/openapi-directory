package openapisdk.models.shared;


public enum StudentRaceEnum {
    CAUCASIAN("Caucasian"),
    ASIAN("Asian"),
    BLACK_OR_AFRICAN_AMERICAN("Black or African American"),
    AMERICAN_INDIAN("American Indian"),
    HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER("Hawaiian or Other Pacific Islander"),
    TWO_OR_MORE_RACES("Two or More Races"),
    UNKNOWN_MIXED("Unknown"),
    UNKNOWN_UPPER("");

    public final String value;

    private StudentRaceEnum(String value) {
        this.value = value;
    }
}
