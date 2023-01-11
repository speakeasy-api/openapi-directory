package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetSampleDataRequestBodyS3SourceConfig
 * Contains information about the source configuration in Amazon S3.
**/
public class GetSampleDataRequestBodyS3SourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileFormatDescriptor")
    public openapisdk.models.shared.FileFormatDescriptor fileFormatDescriptor;
    public GetSampleDataRequestBodyS3SourceConfig withFileFormatDescriptor(openapisdk.models.shared.FileFormatDescriptor fileFormatDescriptor) {
        this.fileFormatDescriptor = fileFormatDescriptor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HistoricalDataPathList")
    public String[] historicalDataPathList;
    public GetSampleDataRequestBodyS3SourceConfig withHistoricalDataPathList(String[] historicalDataPathList) {
        this.historicalDataPathList = historicalDataPathList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public GetSampleDataRequestBodyS3SourceConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplatedPathList")
    public String[] templatedPathList;
    public GetSampleDataRequestBodyS3SourceConfig withTemplatedPathList(String[] templatedPathList) {
        this.templatedPathList = templatedPathList;
        return this;
    }
}