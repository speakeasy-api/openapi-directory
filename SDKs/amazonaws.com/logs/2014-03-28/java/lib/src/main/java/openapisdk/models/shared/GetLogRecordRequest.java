package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLogRecordRequest {
    @JsonProperty("logRecordPointer")
    public String logRecordPointer;
    public GetLogRecordRequest withLogRecordPointer(String logRecordPointer) {
        this.logRecordPointer = logRecordPointer;
        return this;
    }
}