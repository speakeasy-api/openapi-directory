package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLogRecordResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logRecord")
    public java.util.Map<String, String> logRecord;
    public GetLogRecordResponse withLogRecord(java.util.Map<String, String> logRecord) {
        this.logRecord = logRecord;
        return this;
    }
}