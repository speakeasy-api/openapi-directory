package openapisdk.models.shared;



public class DescribeSslPoliciesOutput {
    public String nextMarker;
    public DescribeSslPoliciesOutput withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public SslPolicy[] sslPolicies;
    public DescribeSslPoliciesOutput withSslPolicies(SslPolicy[] sslPolicies) {
        this.sslPolicies = sslPolicies;
        return this;
    }
}