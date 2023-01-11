package openapisdk.models.shared;


public enum CarCountryEnum {
    US_UPPER("US"),
    CA_UPPER("CA"),
    US_LOWER("us"),
    CA_LOWER("ca"),
    ALL_LOWER("all"),
    ALL_UPPER("ALL");

    public final String value;

    private CarCountryEnum(String value) {
        this.value = value;
    }
}
