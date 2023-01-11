package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TraceUser
 * Information about a user recorded in segment documents.
**/
public class TraceUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceIds")
    public ServiceId[] serviceIds;
    public TraceUser withServiceIds(ServiceId[] serviceIds) {
        this.serviceIds = serviceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserName")
    public String userName;
    public TraceUser withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}