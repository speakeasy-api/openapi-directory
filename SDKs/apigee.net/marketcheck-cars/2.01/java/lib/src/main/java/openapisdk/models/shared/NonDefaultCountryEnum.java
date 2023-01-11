package openapisdk.models.shared;


public enum NonDefaultCountryEnum {
    US_UPPER("US"),
    CA_UPPER("CA"),
    US_LOWER("us"),
    CA_LOWER("ca");

    public final String value;

    private NonDefaultCountryEnum(String value) {
        this.value = value;
    }
}
