package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * SendDataPoint
 * Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity. 
**/
public class SendDataPoint {
    public Long bounces;
    public SendDataPoint withBounces(Long bounces) {
        this.bounces = bounces;
        return this;
    }
    public Long complaints;
    public SendDataPoint withComplaints(Long complaints) {
        this.complaints = complaints;
        return this;
    }
    public Long deliveryAttempts;
    public SendDataPoint withDeliveryAttempts(Long deliveryAttempts) {
        this.deliveryAttempts = deliveryAttempts;
        return this;
    }
    public Long rejects;
    public SendDataPoint withRejects(Long rejects) {
        this.rejects = rejects;
        return this;
    }
    public OffsetDateTime timestamp;
    public SendDataPoint withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}