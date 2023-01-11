package openapisdk.models.shared;


public enum ShippingOptionEnum {
    SECOND_DAY("SECOND_DAY"),
    NEXT_DAY("NEXT_DAY"),
    EXPRESS("EXPRESS"),
    STANDARD("STANDARD");

    public final String value;

    private ShippingOptionEnum(String value) {
        this.value = value;
    }
}
