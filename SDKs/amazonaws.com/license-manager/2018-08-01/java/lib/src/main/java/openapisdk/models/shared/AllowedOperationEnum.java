package openapisdk.models.shared;


public enum AllowedOperationEnum {
    CREATE_GRANT("CreateGrant"),
    CHECKOUT_LICENSE("CheckoutLicense"),
    CHECKOUT_BORROW_LICENSE("CheckoutBorrowLicense"),
    CHECK_IN_LICENSE("CheckInLicense"),
    EXTEND_CONSUMPTION_LICENSE("ExtendConsumptionLicense"),
    LIST_PURCHASED_LICENSES("ListPurchasedLicenses"),
    CREATE_TOKEN("CreateToken");

    public final String value;

    private AllowedOperationEnum(String value) {
        this.value = value;
    }
}
