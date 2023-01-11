package openapisdk.models.shared;


public enum OrderDiscountsScopeEnum {
    ORDER("order"),
    LINE_ITEM("line_item");

    public final String value;

    private OrderDiscountsScopeEnum(String value) {
        this.value = value;
    }
}
