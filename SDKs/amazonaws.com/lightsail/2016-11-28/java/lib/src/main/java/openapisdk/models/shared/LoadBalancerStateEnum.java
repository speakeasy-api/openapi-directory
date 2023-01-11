package openapisdk.models.shared;


public enum LoadBalancerStateEnum {
    ACTIVE("active"),
    PROVISIONING("provisioning"),
    ACTIVE_IMPAIRED("active_impaired"),
    FAILED("failed"),
    UNKNOWN("unknown");

    public final String value;

    private LoadBalancerStateEnum(String value) {
        this.value = value;
    }
}
