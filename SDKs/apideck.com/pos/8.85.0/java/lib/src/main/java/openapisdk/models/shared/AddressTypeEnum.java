package openapisdk.models.shared;


public enum AddressTypeEnum {
    PRIMARY("primary"),
    SECONDARY("secondary"),
    HOME("home"),
    OFFICE("office"),
    SHIPPING("shipping"),
    BILLING("billing"),
    OTHER("other");

    public final String value;

    private AddressTypeEnum(String value) {
        this.value = value;
    }
}
