package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCloudFormationStackRecordsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudFormationStackRecords")
    public CloudFormationStackRecord[] cloudFormationStackRecords;
    public GetCloudFormationStackRecordsResult withCloudFormationStackRecords(CloudFormationStackRecord[] cloudFormationStackRecords) {
        this.cloudFormationStackRecords = cloudFormationStackRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetCloudFormationStackRecordsResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}