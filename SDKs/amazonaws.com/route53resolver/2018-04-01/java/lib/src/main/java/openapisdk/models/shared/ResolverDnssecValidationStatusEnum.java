package openapisdk.models.shared;


public enum ResolverDnssecValidationStatusEnum {
    ENABLING("ENABLING"),
    ENABLED("ENABLED"),
    DISABLING("DISABLING"),
    DISABLED("DISABLED");

    public final String value;

    private ResolverDnssecValidationStatusEnum(String value) {
        this.value = value;
    }
}
