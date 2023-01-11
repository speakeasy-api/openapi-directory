package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokeEndpointHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public InvokeEndpointHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public InvokeEndpointHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;
    public InvokeEndpointHeaders withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;
    public InvokeEndpointHeaders withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;
    public InvokeEndpointHeaders withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;
    public InvokeEndpointHeaders withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;
    public InvokeEndpointHeaders withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;
    public InvokeEndpointHeaders withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;
    public InvokeEndpointHeaders withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amzn-SageMaker-Custom-Attributes")
    public String xAmznSageMakerCustomAttributes;
    public InvokeEndpointHeaders withXAmznSageMakerCustomAttributes(String xAmznSageMakerCustomAttributes) {
        this.xAmznSageMakerCustomAttributes = xAmznSageMakerCustomAttributes;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amzn-SageMaker-Inference-Id")
    public String xAmznSageMakerInferenceId;
    public InvokeEndpointHeaders withXAmznSageMakerInferenceId(String xAmznSageMakerInferenceId) {
        this.xAmznSageMakerInferenceId = xAmznSageMakerInferenceId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amzn-SageMaker-Target-Container-Hostname")
    public String xAmznSageMakerTargetContainerHostname;
    public InvokeEndpointHeaders withXAmznSageMakerTargetContainerHostname(String xAmznSageMakerTargetContainerHostname) {
        this.xAmznSageMakerTargetContainerHostname = xAmznSageMakerTargetContainerHostname;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amzn-SageMaker-Target-Model")
    public String xAmznSageMakerTargetModel;
    public InvokeEndpointHeaders withXAmznSageMakerTargetModel(String xAmznSageMakerTargetModel) {
        this.xAmznSageMakerTargetModel = xAmznSageMakerTargetModel;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amzn-SageMaker-Target-Variant")
    public String xAmznSageMakerTargetVariant;
    public InvokeEndpointHeaders withXAmznSageMakerTargetVariant(String xAmznSageMakerTargetVariant) {
        this.xAmznSageMakerTargetVariant = xAmznSageMakerTargetVariant;
        return this;
    }
}