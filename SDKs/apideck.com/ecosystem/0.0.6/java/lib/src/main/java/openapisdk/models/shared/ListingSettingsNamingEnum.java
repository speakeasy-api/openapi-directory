package openapisdk.models.shared;


public enum ListingSettingsNamingEnum {
    LISTING("LISTING"),
    LISTINGS("LISTINGS"),
    INTEGRATIONS("INTEGRATIONS"),
    APPS("APPS"),
    CONNECTORS("CONNECTORS"),
    DATASOURCES("DATASOURCES"),
    ADDONS("ADDONS"),
    PLUGINS("PLUGINS"),
    PARTNERS("PARTNERS"),
    CHANNELS("CHANNELS"),
    CONNECTIONS("CONNECTIONS"),
    EXTENSIONS("EXTENSIONS");

    public final String value;

    private ListingSettingsNamingEnum(String value) {
        this.value = value;
    }
}
