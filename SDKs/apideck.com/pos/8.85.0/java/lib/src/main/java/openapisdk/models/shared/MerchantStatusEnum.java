package openapisdk.models.shared;


public enum MerchantStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    OTHER("other");

    public final String value;

    private MerchantStatusEnum(String value) {
        this.value = value;
    }
}
