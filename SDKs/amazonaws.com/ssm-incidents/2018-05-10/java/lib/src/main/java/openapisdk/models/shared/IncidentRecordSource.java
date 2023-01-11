package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IncidentRecordSource
 * Details about how the incident record was created and when.
**/
public class IncidentRecordSource {
    @JsonProperty("createdBy")
    public String createdBy;
    public IncidentRecordSource withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invokedBy")
    public String invokedBy;
    public IncidentRecordSource withInvokedBy(String invokedBy) {
        this.invokedBy = invokedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;
    public IncidentRecordSource withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("source")
    public String source;
    public IncidentRecordSource withSource(String source) {
        this.source = source;
        return this;
    }
}