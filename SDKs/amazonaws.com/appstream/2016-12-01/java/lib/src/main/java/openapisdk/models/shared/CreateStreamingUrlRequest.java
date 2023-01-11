package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamingUrlRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationId")
    public String applicationId;
    public CreateStreamingUrlRequest withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonProperty("FleetName")
    public String fleetName;
    public CreateStreamingUrlRequest withFleetName(String fleetName) {
        this.fleetName = fleetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SessionContext")
    public String sessionContext;
    public CreateStreamingUrlRequest withSessionContext(String sessionContext) {
        this.sessionContext = sessionContext;
        return this;
    }
    @JsonProperty("StackName")
    public String stackName;
    public CreateStreamingUrlRequest withStackName(String stackName) {
        this.stackName = stackName;
        return this;
    }
    @JsonProperty("UserId")
    public String userId;
    public CreateStreamingUrlRequest withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Validity")
    public Long validity;
    public CreateStreamingUrlRequest withValidity(Long validity) {
        this.validity = validity;
        return this;
    }
}