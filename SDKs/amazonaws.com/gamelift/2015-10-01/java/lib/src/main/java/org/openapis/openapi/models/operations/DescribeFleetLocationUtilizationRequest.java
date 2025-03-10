/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DescribeFleetLocationUtilizationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.DescribeFleetLocationUtilizationInput describeFleetLocationUtilizationInput;

    public DescribeFleetLocationUtilizationRequest withDescribeFleetLocationUtilizationInput(org.openapis.openapi.models.shared.DescribeFleetLocationUtilizationInput describeFleetLocationUtilizationInput) {
        this.describeFleetLocationUtilizationInput = describeFleetLocationUtilizationInput;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public DescribeFleetLocationUtilizationRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public DescribeFleetLocationUtilizationRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public DescribeFleetLocationUtilizationRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public DescribeFleetLocationUtilizationRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public DescribeFleetLocationUtilizationRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public DescribeFleetLocationUtilizationRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public DescribeFleetLocationUtilizationRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public DescribeFleetLocationUtilizationXAmzTargetEnum xAmzTarget;

    public DescribeFleetLocationUtilizationRequest withXAmzTarget(DescribeFleetLocationUtilizationXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public DescribeFleetLocationUtilizationRequest(@JsonProperty("DescribeFleetLocationUtilizationInput") org.openapis.openapi.models.shared.DescribeFleetLocationUtilizationInput describeFleetLocationUtilizationInput, @JsonProperty("X-Amz-Target") DescribeFleetLocationUtilizationXAmzTargetEnum xAmzTarget) {
        this.describeFleetLocationUtilizationInput = describeFleetLocationUtilizationInput;
        this.xAmzTarget = xAmzTarget;
  }
}
