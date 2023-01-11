package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEndpointRequestBodyEndpointRequest
 * Specifies the channel type and other settings for an endpoint.
**/
public class UpdateEndpointRequestBodyEndpointRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address")
    public String address;
    public UpdateEndpointRequestBodyEndpointRequest withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String[]> attributes;
    public UpdateEndpointRequestBodyEndpointRequest withAttributes(java.util.Map<String, String[]> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelType")
    public openapisdk.models.shared.ChannelTypeEnum channelType;
    public UpdateEndpointRequestBodyEndpointRequest withChannelType(openapisdk.models.shared.ChannelTypeEnum channelType) {
        this.channelType = channelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Demographic")
    public openapisdk.models.shared.EndpointDemographic demographic;
    public UpdateEndpointRequestBodyEndpointRequest withDemographic(openapisdk.models.shared.EndpointDemographic demographic) {
        this.demographic = demographic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveDate")
    public String effectiveDate;
    public UpdateEndpointRequestBodyEndpointRequest withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointStatus")
    public String endpointStatus;
    public UpdateEndpointRequestBodyEndpointRequest withEndpointStatus(String endpointStatus) {
        this.endpointStatus = endpointStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public openapisdk.models.shared.EndpointLocation location;
    public UpdateEndpointRequestBodyEndpointRequest withLocation(openapisdk.models.shared.EndpointLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Metrics")
    public java.util.Map<String, Double> metrics;
    public UpdateEndpointRequestBodyEndpointRequest withMetrics(java.util.Map<String, Double> metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptOut")
    public String optOut;
    public UpdateEndpointRequestBodyEndpointRequest withOptOut(String optOut) {
        this.optOut = optOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestId")
    public String requestId;
    public UpdateEndpointRequestBodyEndpointRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("User")
    public openapisdk.models.shared.EndpointUser user;
    public UpdateEndpointRequestBodyEndpointRequest withUser(openapisdk.models.shared.EndpointUser user) {
        this.user = user;
        return this;
    }
}