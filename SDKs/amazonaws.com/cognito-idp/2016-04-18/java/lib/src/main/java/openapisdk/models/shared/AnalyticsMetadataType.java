package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyticsMetadataType
 * <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note>
**/
public class AnalyticsMetadataType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalyticsEndpointId")
    public String analyticsEndpointId;
    public AnalyticsMetadataType withAnalyticsEndpointId(String analyticsEndpointId) {
        this.analyticsEndpointId = analyticsEndpointId;
        return this;
    }
}