package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDimensionKeyDetailsRequest {
    @JsonProperty("Group")
    public String group;
    public GetDimensionKeyDetailsRequest withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonProperty("GroupIdentifier")
    public String groupIdentifier;
    public GetDimensionKeyDetailsRequest withGroupIdentifier(String groupIdentifier) {
        this.groupIdentifier = groupIdentifier;
        return this;
    }
    @JsonProperty("Identifier")
    public String identifier;
    public GetDimensionKeyDetailsRequest withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestedDimensions")
    public String[] requestedDimensions;
    public GetDimensionKeyDetailsRequest withRequestedDimensions(String[] requestedDimensions) {
        this.requestedDimensions = requestedDimensions;
        return this;
    }
    @JsonProperty("ServiceType")
    public ServiceTypeEnum serviceType;
    public GetDimensionKeyDetailsRequest withServiceType(ServiceTypeEnum serviceType) {
        this.serviceType = serviceType;
        return this;
    }
}