package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * RealtimeEndpointInfo
 *  Describes the real-time endpoint information for an <code>MLModel</code>.
**/
public class RealtimeEndpointInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public RealtimeEndpointInfo withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointStatus")
    public RealtimeEndpointStatusEnum endpointStatus;
    public RealtimeEndpointInfo withEndpointStatus(RealtimeEndpointStatusEnum endpointStatus) {
        this.endpointStatus = endpointStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointUrl")
    public String endpointUrl;
    public RealtimeEndpointInfo withEndpointUrl(String endpointUrl) {
        this.endpointUrl = endpointUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeakRequestsPerSecond")
    public Long peakRequestsPerSecond;
    public RealtimeEndpointInfo withPeakRequestsPerSecond(Long peakRequestsPerSecond) {
        this.peakRequestsPerSecond = peakRequestsPerSecond;
        return this;
    }
}