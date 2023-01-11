package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkingLocationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Bucket")
    public String s3Bucket;
    public GetWorkingLocationResponse withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Path")
    public String s3Path;
    public GetWorkingLocationResponse withS3Path(String s3Path) {
        this.s3Path = s3Path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Uri")
    public String s3Uri;
    public GetWorkingLocationResponse withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
}