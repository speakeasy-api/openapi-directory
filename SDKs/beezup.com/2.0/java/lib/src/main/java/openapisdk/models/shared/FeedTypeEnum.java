package openapisdk.models.shared;


public enum FeedTypeEnum {
    PRODUCTS("Products"),
    INVENTORY("Inventory"),
    PRICING("Pricing"),
    IMAGES("Images"),
    RELATIONSHIPS("Relationships"),
    UNPUBLISH("Unpublish"),
    OFFERS("Offers");

    public final String value;

    private FeedTypeEnum(String value) {
        this.value = value;
    }
}
