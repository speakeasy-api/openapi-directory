package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3SourceConfig
 * Contains information about the configuration of the S3 bucket that contains source files.
**/
public class S3SourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileFormatDescriptor")
    public FileFormatDescriptor fileFormatDescriptor;
    public S3SourceConfig withFileFormatDescriptor(FileFormatDescriptor fileFormatDescriptor) {
        this.fileFormatDescriptor = fileFormatDescriptor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HistoricalDataPathList")
    public String[] historicalDataPathList;
    public S3SourceConfig withHistoricalDataPathList(String[] historicalDataPathList) {
        this.historicalDataPathList = historicalDataPathList;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public S3SourceConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplatedPathList")
    public String[] templatedPathList;
    public S3SourceConfig withTemplatedPathList(String[] templatedPathList) {
        this.templatedPathList = templatedPathList;
        return this;
    }
}