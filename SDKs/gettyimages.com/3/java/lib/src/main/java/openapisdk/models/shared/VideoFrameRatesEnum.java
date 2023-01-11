package openapisdk.models.shared;


public enum VideoFrameRatesEnum {
    TWENTY_THREE98("23.98"),
    TWENTY_FOUR("24"),
    TWENTY_FIVE("25"),
    TWENTY_NINE97("29.97"),
    THIRTY("30"),
    FIFTY("50"),
    FIFTY_NINE94("59.94"),
    SIXTY("60");

    public final String value;

    private VideoFrameRatesEnum(String value) {
        this.value = value;
    }
}
