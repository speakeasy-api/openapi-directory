package openapisdk.models.shared;


public enum DomainTypeEnum {
    ENDPOINT("ENDPOINT"),
    AWS_MANAGED("AWS_MANAGED"),
    CUSTOMER_MANAGED("CUSTOMER_MANAGED");

    public final String value;

    private DomainTypeEnum(String value) {
        this.value = value;
    }
}
