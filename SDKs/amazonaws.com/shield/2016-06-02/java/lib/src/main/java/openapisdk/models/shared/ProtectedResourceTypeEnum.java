package openapisdk.models.shared;


public enum ProtectedResourceTypeEnum {
    CLOUDFRONT_DISTRIBUTION("CLOUDFRONT_DISTRIBUTION"),
    ROUTE53_HOSTED_ZONE("ROUTE_53_HOSTED_ZONE"),
    ELASTIC_IP_ALLOCATION("ELASTIC_IP_ALLOCATION"),
    CLASSIC_LOAD_BALANCER("CLASSIC_LOAD_BALANCER"),
    APPLICATION_LOAD_BALANCER("APPLICATION_LOAD_BALANCER"),
    GLOBAL_ACCELERATOR("GLOBAL_ACCELERATOR");

    public final String value;

    private ProtectedResourceTypeEnum(String value) {
        this.value = value;
    }
}
