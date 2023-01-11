package openapisdk.models.shared;


public enum AgeOfPeopleFilterTypeEnum {
    NEWBORN("newborn"),
    BABY("baby"),
    CHILD("child"),
    TEENAGER("teenager"),
    YOUNG_ADULT("young_adult"),
    ADULT("adult"),
    ADULTS_ONLY("adults_only"),
    MATURE_ADULT("mature_adult"),
    SENIOR_ADULT("senior_adult"),
    ZERO1_MONTHS("0-1_months"),
    TWO5_MONTHS("2-5_months"),
    SIX11_MONTHS("6-11_months"),
    TWELVE17_MONTHS("12-17_months"),
    EIGHTEEN23_MONTHS("18-23_months"),
    TWO3_YEARS("2-3_years"),
    FOUR5_YEARS("4-5_years"),
    SIX7_YEARS("6-7_years"),
    EIGHT9_YEARS("8-9_years"),
    TEN11_YEARS("10-11_years"),
    TWELVE13_YEARS("12-13_years"),
    FOURTEEN15_YEARS("14-15_years"),
    SIXTEEN17_YEARS("16-17_years"),
    EIGHTEEN19_YEARS("18-19_years"),
    TWENTY24_YEARS("20-24_years"),
    TWENTY29_YEARS("20-29_years"),
    TWENTY_FIVE29_YEARS("25-29_years"),
    THIRTY34_YEARS("30-34_years"),
    THIRTY39_YEARS("30-39_years"),
    THIRTY_FIVE39_YEARS("35-39_years"),
    FORTY44_YEARS("40-44_years"),
    FORTY49_YEARS("40-49_years"),
    FORTY_FIVE49_YEARS("45-49_years"),
    FIFTY54_YEARS("50-54_years"),
    FIFTY59_YEARS("50-59_years"),
    FIFTY_FIVE59_YEARS("55-59_years"),
    SIXTY64_YEARS("60-64_years"),
    SIXTY69_YEARS("60-69_years"),
    SIXTY_FIVE69_YEARS("65-69_years"),
    SEVENTY79_YEARS("70-79_years"),
    EIGHTY89_YEARS("80-89_years"),
    NINETY_PLUS_YEARS("90_plus_years"),
    ONE_HUNDRED_OVER("100_over");

    public final String value;

    private AgeOfPeopleFilterTypeEnum(String value) {
        this.value = value;
    }
}
