package openapisdk.models.shared;


public enum DomainAvailabilityEnum {
    AVAILABLE("AVAILABLE"),
    AVAILABLE_RESERVED("AVAILABLE_RESERVED"),
    AVAILABLE_PREORDER("AVAILABLE_PREORDER"),
    UNAVAILABLE("UNAVAILABLE"),
    UNAVAILABLE_PREMIUM("UNAVAILABLE_PREMIUM"),
    UNAVAILABLE_RESTRICTED("UNAVAILABLE_RESTRICTED"),
    RESERVED("RESERVED"),
    DONT_KNOW("DONT_KNOW");

    public final String value;

    private DomainAvailabilityEnum(String value) {
        this.value = value;
    }
}
