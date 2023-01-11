package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRecordOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public DescribeRecordOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordDetail")
    public RecordDetail recordDetail;
    public DescribeRecordOutput withRecordDetail(RecordDetail recordDetail) {
        this.recordDetail = recordDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordOutputs")
    public RecordOutput[] recordOutputs;
    public DescribeRecordOutput withRecordOutputs(RecordOutput[] recordOutputs) {
        this.recordOutputs = recordOutputs;
        return this;
    }
}