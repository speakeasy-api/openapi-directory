/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class TestHypervisorConfigurationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.TestHypervisorConfigurationInput testHypervisorConfigurationInput;

    public TestHypervisorConfigurationRequest withTestHypervisorConfigurationInput(org.openapis.openapi.models.shared.TestHypervisorConfigurationInput testHypervisorConfigurationInput) {
        this.testHypervisorConfigurationInput = testHypervisorConfigurationInput;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public TestHypervisorConfigurationRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public TestHypervisorConfigurationRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public TestHypervisorConfigurationRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public TestHypervisorConfigurationRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public TestHypervisorConfigurationRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public TestHypervisorConfigurationRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public TestHypervisorConfigurationRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public TestHypervisorConfigurationXAmzTargetEnum xAmzTarget;

    public TestHypervisorConfigurationRequest withXAmzTarget(TestHypervisorConfigurationXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public TestHypervisorConfigurationRequest(@JsonProperty("TestHypervisorConfigurationInput") org.openapis.openapi.models.shared.TestHypervisorConfigurationInput testHypervisorConfigurationInput, @JsonProperty("X-Amz-Target") TestHypervisorConfigurationXAmzTargetEnum xAmzTarget) {
        this.testHypervisorConfigurationInput = testHypervisorConfigurationInput;
        this.xAmzTarget = xAmzTarget;
  }
}
