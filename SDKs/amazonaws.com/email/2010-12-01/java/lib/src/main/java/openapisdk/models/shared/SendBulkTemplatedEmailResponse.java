package openapisdk.models.shared;



public class SendBulkTemplatedEmailResponse {
    public BulkEmailDestinationStatus[] status;
    public SendBulkTemplatedEmailResponse withStatus(BulkEmailDestinationStatus[] status) {
        this.status = status;
        return this;
    }
}