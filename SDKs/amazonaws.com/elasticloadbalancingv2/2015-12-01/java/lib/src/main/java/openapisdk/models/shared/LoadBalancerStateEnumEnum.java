package openapisdk.models.shared;


public enum LoadBalancerStateEnumEnum {
    ACTIVE("active"),
    PROVISIONING("provisioning"),
    ACTIVE_IMPAIRED("active_impaired"),
    FAILED("failed");

    public final String value;

    private LoadBalancerStateEnumEnum(String value) {
        this.value = value;
    }
}
