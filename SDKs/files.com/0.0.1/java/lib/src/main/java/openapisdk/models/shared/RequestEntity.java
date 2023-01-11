package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestEntity
 * List Requests
**/
public class RequestEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automation_id")
    public String automationId;
    public RequestEntity withAutomationId(String automationId) {
        this.automationId = automationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public RequestEntity withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public RequestEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public RequestEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public RequestEntity withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_display_name")
    public String userDisplayName;
    public RequestEntity withUserDisplayName(String userDisplayName) {
        this.userDisplayName = userDisplayName;
        return this;
    }
}