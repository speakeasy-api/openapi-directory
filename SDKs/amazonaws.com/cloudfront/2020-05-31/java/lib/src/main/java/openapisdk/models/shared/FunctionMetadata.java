package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * FunctionMetadata
 * Contains metadata about a CloudFront function.
**/
public class FunctionMetadata {
    public OffsetDateTime createdTime;
    public FunctionMetadata withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    public String functionARN;
    public FunctionMetadata withFunctionArn(String functionARN) {
        this.functionARN = functionARN;
        return this;
    }
    public OffsetDateTime lastModifiedTime;
    public FunctionMetadata withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    public FunctionStageEnum stage;
    public FunctionMetadata withStage(FunctionStageEnum stage) {
        this.stage = stage;
        return this;
    }
}