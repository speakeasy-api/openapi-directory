package openapisdk.models.shared;


public enum OpportunitiesSortByEnum {
    CREATED_AT("created_at"),
    UPDATED_AT("updated_at"),
    TITLE("title"),
    WIN_PROBABILITY("win_probability"),
    MONETARY_AMOUNT("monetary_amount"),
    STATUS("status");

    public final String value;

    private OpportunitiesSortByEnum(String value) {
        this.value = value;
    }
}
