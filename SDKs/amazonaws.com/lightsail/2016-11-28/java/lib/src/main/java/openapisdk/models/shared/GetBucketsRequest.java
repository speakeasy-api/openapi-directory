package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBucketsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketName")
    public String bucketName;
    public GetBucketsRequest withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeConnectedResources")
    public Boolean includeConnectedResources;
    public GetBucketsRequest withIncludeConnectedResources(Boolean includeConnectedResources) {
        this.includeConnectedResources = includeConnectedResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GetBucketsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}