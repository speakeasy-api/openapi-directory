package openapisdk.models.shared;


public enum LoadBalancerAttributeNameEnum {
    HEALTH_CHECK_PATH("HealthCheckPath"),
    SESSION_STICKINESS_ENABLED("SessionStickinessEnabled"),
    SESSION_STICKINESS_LB_COOKIE_DURATION_SECONDS("SessionStickiness_LB_CookieDurationSeconds");

    public final String value;

    private LoadBalancerAttributeNameEnum(String value) {
        this.value = value;
    }
}
