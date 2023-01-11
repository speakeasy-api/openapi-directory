package openapisdk.models.shared;


public enum RoundEnum {
    FIVE("five"),
    NONE("none"),
    ONE("one"),
    TEN("ten");

    public final String value;

    private RoundEnum(String value) {
        this.value = value;
    }
}
