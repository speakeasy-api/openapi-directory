package openapisdk.models.shared;


public enum DateSearchTypeEnum {
    MODIFICATION("Modification"),
    PURCHASE("Purchase"),
    MARKET_PLACE_MODIFICATION("MarketPlaceModification");

    public final String value;

    private DateSearchTypeEnum(String value) {
        this.value = value;
    }
}
