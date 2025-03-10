/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * DescribeModelCardExportJobResponse - Success
 */
public class DescribeModelCardExportJobResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;

    public DescribeModelCardExportJobResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExportArtifacts")
    public ModelCardExportArtifacts exportArtifacts;

    public DescribeModelCardExportJobResponse withExportArtifacts(ModelCardExportArtifacts exportArtifacts) {
        this.exportArtifacts = exportArtifacts;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;

    public DescribeModelCardExportJobResponse withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedAt")
    public OffsetDateTime lastModifiedAt;

    public DescribeModelCardExportJobResponse withLastModifiedAt(OffsetDateTime lastModifiedAt) {
        this.lastModifiedAt = lastModifiedAt;
        return this;
    }
    
    @JsonProperty("ModelCardExportJobArn")
    public String modelCardExportJobArn;

    public DescribeModelCardExportJobResponse withModelCardExportJobArn(String modelCardExportJobArn) {
        this.modelCardExportJobArn = modelCardExportJobArn;
        return this;
    }
    
    @JsonProperty("ModelCardExportJobName")
    public String modelCardExportJobName;

    public DescribeModelCardExportJobResponse withModelCardExportJobName(String modelCardExportJobName) {
        this.modelCardExportJobName = modelCardExportJobName;
        return this;
    }
    
    @JsonProperty("ModelCardName")
    public String modelCardName;

    public DescribeModelCardExportJobResponse withModelCardName(String modelCardName) {
        this.modelCardName = modelCardName;
        return this;
    }
    
    @JsonProperty("ModelCardVersion")
    public Long modelCardVersion;

    public DescribeModelCardExportJobResponse withModelCardVersion(Long modelCardVersion) {
        this.modelCardVersion = modelCardVersion;
        return this;
    }
    
    @JsonProperty("OutputConfig")
    public ModelCardExportOutputConfig outputConfig;

    public DescribeModelCardExportJobResponse withOutputConfig(ModelCardExportOutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
    
    @JsonProperty("Status")
    public ModelCardExportJobStatusEnum status;

    public DescribeModelCardExportJobResponse withStatus(ModelCardExportJobStatusEnum status) {
        this.status = status;
        return this;
    }
    
    public DescribeModelCardExportJobResponse(@JsonProperty("CreatedAt") OffsetDateTime createdAt, @JsonProperty("LastModifiedAt") OffsetDateTime lastModifiedAt, @JsonProperty("ModelCardExportJobArn") String modelCardExportJobArn, @JsonProperty("ModelCardExportJobName") String modelCardExportJobName, @JsonProperty("ModelCardName") String modelCardName, @JsonProperty("ModelCardVersion") Long modelCardVersion, @JsonProperty("OutputConfig") ModelCardExportOutputConfig outputConfig, @JsonProperty("Status") ModelCardExportJobStatusEnum status) {
        this.createdAt = createdAt;
        this.lastModifiedAt = lastModifiedAt;
        this.modelCardExportJobArn = modelCardExportJobArn;
        this.modelCardExportJobName = modelCardExportJobName;
        this.modelCardName = modelCardName;
        this.modelCardVersion = modelCardVersion;
        this.outputConfig = outputConfig;
        this.status = status;
  }
}
