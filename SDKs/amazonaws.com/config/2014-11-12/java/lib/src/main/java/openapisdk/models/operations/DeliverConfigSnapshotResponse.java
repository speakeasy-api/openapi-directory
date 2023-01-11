package openapisdk.models.operations;



public class DeliverConfigSnapshotResponse {
    public String contentType;
    public DeliverConfigSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeliverConfigSnapshotResponse deliverConfigSnapshotResponse;
    public DeliverConfigSnapshotResponse withDeliverConfigSnapshotResponse(openapisdk.models.shared.DeliverConfigSnapshotResponse deliverConfigSnapshotResponse) {
        this.deliverConfigSnapshotResponse = deliverConfigSnapshotResponse;
        return this;
    }
    public Object noAvailableConfigurationRecorderException;
    public DeliverConfigSnapshotResponse withNoAvailableConfigurationRecorderException(Object noAvailableConfigurationRecorderException) {
        this.noAvailableConfigurationRecorderException = noAvailableConfigurationRecorderException;
        return this;
    }
    public Object noRunningConfigurationRecorderException;
    public DeliverConfigSnapshotResponse withNoRunningConfigurationRecorderException(Object noRunningConfigurationRecorderException) {
        this.noRunningConfigurationRecorderException = noRunningConfigurationRecorderException;
        return this;
    }
    public Object noSuchDeliveryChannelException;
    public DeliverConfigSnapshotResponse withNoSuchDeliveryChannelException(Object noSuchDeliveryChannelException) {
        this.noSuchDeliveryChannelException = noSuchDeliveryChannelException;
        return this;
    }
    public Long statusCode;
    public DeliverConfigSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}