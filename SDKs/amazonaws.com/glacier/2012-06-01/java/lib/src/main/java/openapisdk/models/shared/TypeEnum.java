package openapisdk.models.shared;


public enum TypeEnum {
    AMAZON_CUSTOMER_BY_EMAIL("AmazonCustomerByEmail"),
    CANONICAL_USER("CanonicalUser"),
    GROUP("Group");

    public final String value;

    private TypeEnum(String value) {
        this.value = value;
    }
}
