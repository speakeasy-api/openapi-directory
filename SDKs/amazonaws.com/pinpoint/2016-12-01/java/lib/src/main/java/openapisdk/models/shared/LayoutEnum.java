package openapisdk.models.shared;


public enum LayoutEnum {
    BOTTOM_BANNER("BOTTOM_BANNER"),
    TOP_BANNER("TOP_BANNER"),
    OVERLAYS("OVERLAYS"),
    MOBILE_FEED("MOBILE_FEED"),
    MIDDLE_BANNER("MIDDLE_BANNER"),
    CAROUSEL("CAROUSEL");

    public final String value;

    private LayoutEnum(String value) {
        this.value = value;
    }
}
