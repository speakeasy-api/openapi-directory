package openapisdk.models.shared;



public class CreateFlowLogsResult {
    public java.util.Map<String, Object> clientToken;
    public CreateFlowLogsResult withClientToken(java.util.Map<String, Object> clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    public java.util.Map<String, Object> flowLogIds;
    public CreateFlowLogsResult withFlowLogIds(java.util.Map<String, Object> flowLogIds) {
        this.flowLogIds = flowLogIds;
        return this;
    }
    public java.util.Map<String, Object> unsuccessful;
    public CreateFlowLogsResult withUnsuccessful(java.util.Map<String, Object> unsuccessful) {
        this.unsuccessful = unsuccessful;
        return this;
    }
}