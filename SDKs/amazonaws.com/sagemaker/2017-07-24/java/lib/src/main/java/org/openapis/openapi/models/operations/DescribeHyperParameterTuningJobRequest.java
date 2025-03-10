/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DescribeHyperParameterTuningJobRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.DescribeHyperParameterTuningJobRequest describeHyperParameterTuningJobRequest;

    public DescribeHyperParameterTuningJobRequest withDescribeHyperParameterTuningJobRequest(org.openapis.openapi.models.shared.DescribeHyperParameterTuningJobRequest describeHyperParameterTuningJobRequest) {
        this.describeHyperParameterTuningJobRequest = describeHyperParameterTuningJobRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public DescribeHyperParameterTuningJobRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public DescribeHyperParameterTuningJobRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public DescribeHyperParameterTuningJobRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public DescribeHyperParameterTuningJobRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public DescribeHyperParameterTuningJobRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public DescribeHyperParameterTuningJobRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public DescribeHyperParameterTuningJobRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public DescribeHyperParameterTuningJobXAmzTargetEnum xAmzTarget;

    public DescribeHyperParameterTuningJobRequest withXAmzTarget(DescribeHyperParameterTuningJobXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public DescribeHyperParameterTuningJobRequest(@JsonProperty("DescribeHyperParameterTuningJobRequest") org.openapis.openapi.models.shared.DescribeHyperParameterTuningJobRequest describeHyperParameterTuningJobRequest, @JsonProperty("X-Amz-Target") DescribeHyperParameterTuningJobXAmzTargetEnum xAmzTarget) {
        this.describeHyperParameterTuningJobRequest = describeHyperParameterTuningJobRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
