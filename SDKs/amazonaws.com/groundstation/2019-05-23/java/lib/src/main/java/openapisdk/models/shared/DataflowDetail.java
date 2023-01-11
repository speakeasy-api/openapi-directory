package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataflowDetail
 * Information about a dataflow edge used in a contact.
**/
public class DataflowDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public Destination destination;
    public DataflowDetail withDestination(Destination destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public DataflowDetail withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Source source;
    public DataflowDetail withSource(Source source) {
        this.source = source;
        return this;
    }
}