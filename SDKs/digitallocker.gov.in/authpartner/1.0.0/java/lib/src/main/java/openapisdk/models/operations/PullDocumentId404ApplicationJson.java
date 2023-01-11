package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullDocumentId404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Object error;
    public PullDocumentId404ApplicationJson withError(Object error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_description")
    public Object errorDescription;
    public PullDocumentId404ApplicationJson withErrorDescription(Object errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}