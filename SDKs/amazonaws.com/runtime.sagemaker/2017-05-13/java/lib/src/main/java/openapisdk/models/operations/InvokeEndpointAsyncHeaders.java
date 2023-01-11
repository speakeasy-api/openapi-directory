package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokeEndpointAsyncHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;
    public InvokeEndpointAsyncHeaders withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;
    public InvokeEndpointAsyncHeaders withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;
    public InvokeEndpointAsyncHeaders withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;
    public InvokeEndpointAsyncHeaders withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;
    public InvokeEndpointAsyncHeaders withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;
    public InvokeEndpointAsyncHeaders withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;
    public InvokeEndpointAsyncHeaders withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amzn-SageMaker-Accept")
    public String xAmznSageMakerAccept;
    public InvokeEndpointAsyncHeaders withXAmznSageMakerAccept(String xAmznSageMakerAccept) {
        this.xAmznSageMakerAccept = xAmznSageMakerAccept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amzn-SageMaker-Content-Type")
    public String xAmznSageMakerContentType;
    public InvokeEndpointAsyncHeaders withXAmznSageMakerContentType(String xAmznSageMakerContentType) {
        this.xAmznSageMakerContentType = xAmznSageMakerContentType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amzn-SageMaker-Custom-Attributes")
    public String xAmznSageMakerCustomAttributes;
    public InvokeEndpointAsyncHeaders withXAmznSageMakerCustomAttributes(String xAmznSageMakerCustomAttributes) {
        this.xAmznSageMakerCustomAttributes = xAmznSageMakerCustomAttributes;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amzn-SageMaker-Inference-Id")
    public String xAmznSageMakerInferenceId;
    public InvokeEndpointAsyncHeaders withXAmznSageMakerInferenceId(String xAmznSageMakerInferenceId) {
        this.xAmznSageMakerInferenceId = xAmznSageMakerInferenceId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amzn-SageMaker-InputLocation")
    public String xAmznSageMakerInputLocation;
    public InvokeEndpointAsyncHeaders withXAmznSageMakerInputLocation(String xAmznSageMakerInputLocation) {
        this.xAmznSageMakerInputLocation = xAmznSageMakerInputLocation;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amzn-SageMaker-RequestTTLSeconds")
    public Long xAmznSageMakerRequestTTLSeconds;
    public InvokeEndpointAsyncHeaders withXAmznSageMakerRequestTtlSeconds(Long xAmznSageMakerRequestTTLSeconds) {
        this.xAmznSageMakerRequestTTLSeconds = xAmznSageMakerRequestTTLSeconds;
        return this;
    }
}