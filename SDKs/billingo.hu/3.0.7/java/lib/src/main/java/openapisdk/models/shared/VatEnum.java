package openapisdk.models.shared;


public enum VatEnum {
    ZERO_PERCENT("0%"),
    ONE_PERCENT("1%"),
    TEN_PERCENT("10%"),
    ELEVEN_PERCENT("11%"),
    TWELVE_PERCENT("12%"),
    THIRTEEN_PERCENT("13%"),
    FOURTEEN_PERCENT("14%"),
    FIFTEEN_PERCENT("15%"),
    SIXTEEN_PERCENT("16%"),
    SEVENTEEN_PERCENT("17%"),
    EIGHTEEN_PERCENT("18%"),
    NINETEEN_PERCENT("19%"),
    TWO_PERCENT("2%"),
    TWENTY_PERCENT("20%"),
    TWENTY_ONE_PERCENT("21%"),
    TWENTY_TWO_PERCENT("22%"),
    TWENTY_THREE_PERCENT("23%"),
    TWENTY_FOUR_PERCENT("24%"),
    TWENTY_FIVE_PERCENT("25%"),
    TWENTY_SIX_PERCENT("26%"),
    TWENTY_SEVEN_PERCENT("27%"),
    THREE_PERCENT("3%"),
    FOUR_PERCENT("4%"),
    FIVE_PERCENT("5%"),
    SIX_PERCENT("6%"),
    SEVEN_PERCENT("7%"),
    EIGHT_PERCENT("8%"),
    NINE_PERCENT("9%"),
    AAM("AAM"),
    AM("AM"),
    EU("EU"),
    EUK("EUK"),
    F_AFA("F.AFA"),
    FAD("FAD"),
    K_AFA("K.AFA"),
    MAA("MAA"),
    TAM("TAM"),
    AKK("ÁKK"),
    ATHK("ÁTHK");

    public final String value;

    private VatEnum(String value) {
        this.value = value;
    }
}
