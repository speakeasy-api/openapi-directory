package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRecordHistoryOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListRecordHistoryOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordDetails")
    public RecordDetail[] recordDetails;
    public ListRecordHistoryOutput withRecordDetails(RecordDetail[] recordDetails) {
        this.recordDetails = recordDetails;
        return this;
    }
}