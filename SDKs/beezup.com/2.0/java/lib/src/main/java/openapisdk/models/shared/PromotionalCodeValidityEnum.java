package openapisdk.models.shared;


public enum PromotionalCodeValidityEnum {
    NONE("None"),
    VALID("Valid"),
    INVALID("Invalid"),
    EXPIRED_OR_INACTIVE("ExpiredOrInactive");

    public final String value;

    private PromotionalCodeValidityEnum(String value) {
        this.value = value;
    }
}
