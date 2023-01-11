package openapisdk.models.shared;


public enum CountryEnum {
    US_UPPER("US"),
    CA_UPPER("CA"),
    US_LOWER("us"),
    CA_LOWER("ca");

    public final String value;

    private CountryEnum(String value) {
        this.value = value;
    }
}
