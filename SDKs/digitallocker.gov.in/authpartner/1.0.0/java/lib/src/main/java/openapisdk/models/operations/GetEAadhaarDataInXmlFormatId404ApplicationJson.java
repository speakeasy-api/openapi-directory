package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEAadhaarDataInXmlFormatId404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Object error;
    public GetEAadhaarDataInXmlFormatId404ApplicationJson withError(Object error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_description")
    public Object errorDescription;
    public GetEAadhaarDataInXmlFormatId404ApplicationJson withErrorDescription(Object errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}