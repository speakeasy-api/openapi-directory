package openapisdk.models.shared;


public enum QualityEnum {
    GOOD("GOOD"),
    BAD("BAD"),
    UNCERTAIN("UNCERTAIN");

    public final String value;

    private QualityEnum(String value) {
        this.value = value;
    }
}
