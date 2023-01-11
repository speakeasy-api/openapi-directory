package openapisdk.models.shared;



public class ReleaseHostsResult {
    public java.util.Map<String, Object> successful;
    public ReleaseHostsResult withSuccessful(java.util.Map<String, Object> successful) {
        this.successful = successful;
        return this;
    }
    public java.util.Map<String, Object> unsuccessful;
    public ReleaseHostsResult withUnsuccessful(java.util.Map<String, Object> unsuccessful) {
        this.unsuccessful = unsuccessful;
        return this;
    }
}