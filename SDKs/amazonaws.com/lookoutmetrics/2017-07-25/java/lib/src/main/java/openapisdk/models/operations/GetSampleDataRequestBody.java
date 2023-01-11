package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSampleDataRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3SourceConfig")
    public GetSampleDataRequestBodyS3SourceConfig s3SourceConfig;
    public GetSampleDataRequestBody withS3SourceConfig(GetSampleDataRequestBodyS3SourceConfig s3SourceConfig) {
        this.s3SourceConfig = s3SourceConfig;
        return this;
    }
}