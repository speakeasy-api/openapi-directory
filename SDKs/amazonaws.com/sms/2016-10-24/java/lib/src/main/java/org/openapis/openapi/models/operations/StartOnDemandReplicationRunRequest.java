/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class StartOnDemandReplicationRunRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.StartOnDemandReplicationRunRequest startOnDemandReplicationRunRequest;

    public StartOnDemandReplicationRunRequest withStartOnDemandReplicationRunRequest(org.openapis.openapi.models.shared.StartOnDemandReplicationRunRequest startOnDemandReplicationRunRequest) {
        this.startOnDemandReplicationRunRequest = startOnDemandReplicationRunRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public StartOnDemandReplicationRunRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public StartOnDemandReplicationRunRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public StartOnDemandReplicationRunRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public StartOnDemandReplicationRunRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public StartOnDemandReplicationRunRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public StartOnDemandReplicationRunRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public StartOnDemandReplicationRunRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public StartOnDemandReplicationRunXAmzTargetEnum xAmzTarget;

    public StartOnDemandReplicationRunRequest withXAmzTarget(StartOnDemandReplicationRunXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public StartOnDemandReplicationRunRequest(@JsonProperty("StartOnDemandReplicationRunRequest") org.openapis.openapi.models.shared.StartOnDemandReplicationRunRequest startOnDemandReplicationRunRequest, @JsonProperty("X-Amz-Target") StartOnDemandReplicationRunXAmzTargetEnum xAmzTarget) {
        this.startOnDemandReplicationRunRequest = startOnDemandReplicationRunRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
