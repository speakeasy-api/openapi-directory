package openapisdk.models.shared;


public enum InteractionExpiryEnum {
    ONE_DAY("one_day"),
    THREE_DAYS("three_days"),
    ONE_WEEK("one_week"),
    ONE_MONTH("one_month"),
    SIX_MONTHS("six_months");

    public final String value;

    private InteractionExpiryEnum(String value) {
        this.value = value;
    }
}
