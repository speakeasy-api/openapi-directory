package openapisdk.models.shared;


public enum OrderTendersTypeEnum {
    CASH("cash"),
    CARD("card"),
    OTHER("other");

    public final String value;

    private OrderTendersTypeEnum(String value) {
        this.value = value;
    }
}
