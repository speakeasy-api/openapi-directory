package openapisdk.models.shared;



public class ModifyHostsResult {
    public java.util.Map<String, Object> successful;
    public ModifyHostsResult withSuccessful(java.util.Map<String, Object> successful) {
        this.successful = successful;
        return this;
    }
    public java.util.Map<String, Object> unsuccessful;
    public ModifyHostsResult withUnsuccessful(java.util.Map<String, Object> unsuccessful) {
        this.unsuccessful = unsuccessful;
        return this;
    }
}