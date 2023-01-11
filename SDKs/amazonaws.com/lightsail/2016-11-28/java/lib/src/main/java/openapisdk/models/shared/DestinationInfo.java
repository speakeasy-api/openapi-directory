package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationInfo
 * Describes the destination of a record.
**/
public class DestinationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DestinationInfo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public DestinationInfo withService(String service) {
        this.service = service;
        return this;
    }
}