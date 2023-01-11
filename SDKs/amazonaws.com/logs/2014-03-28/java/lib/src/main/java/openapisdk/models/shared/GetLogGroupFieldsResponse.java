package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLogGroupFieldsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupFields")
    public LogGroupField[] logGroupFields;
    public GetLogGroupFieldsResponse withLogGroupFields(LogGroupField[] logGroupFields) {
        this.logGroupFields = logGroupFields;
        return this;
    }
}