package openapisdk.models.shared;


public enum ContactTypeEnum {
    CUSTOMER("customer"),
    SUPPLIER("supplier"),
    EMPLOYEE("employee"),
    PERSONAL("personal");

    public final String value;

    private ContactTypeEnum(String value) {
        this.value = value;
    }
}
