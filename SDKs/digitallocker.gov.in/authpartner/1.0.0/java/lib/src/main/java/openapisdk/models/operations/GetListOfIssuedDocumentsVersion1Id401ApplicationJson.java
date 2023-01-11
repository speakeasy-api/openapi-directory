package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListOfIssuedDocumentsVersion1Id401ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public GetListOfIssuedDocumentsVersion1Id401ApplicationJson withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_description")
    public String errorDescription;
    public GetListOfIssuedDocumentsVersion1Id401ApplicationJson withErrorDescription(String errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}