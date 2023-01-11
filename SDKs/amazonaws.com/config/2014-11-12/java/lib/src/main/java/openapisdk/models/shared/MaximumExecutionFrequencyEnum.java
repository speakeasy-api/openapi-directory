package openapisdk.models.shared;


public enum MaximumExecutionFrequencyEnum {
    ONE_HOUR("One_Hour"),
    THREE_HOURS("Three_Hours"),
    SIX_HOURS("Six_Hours"),
    TWELVE_HOURS("Twelve_Hours"),
    TWENTY_FOUR_HOURS("TwentyFour_Hours");

    public final String value;

    private MaximumExecutionFrequencyEnum(String value) {
        this.value = value;
    }
}
