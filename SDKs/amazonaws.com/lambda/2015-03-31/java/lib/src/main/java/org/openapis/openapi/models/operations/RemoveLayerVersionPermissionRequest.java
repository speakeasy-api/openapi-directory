/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class RemoveLayerVersionPermissionRequest {
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LayerName")
    public String layerName;

    public RemoveLayerVersionPermissionRequest withLayerName(String layerName) {
        this.layerName = layerName;
        return this;
    }
    
    /**
     * Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RevisionId")
    public String revisionId;

    public RemoveLayerVersionPermissionRequest withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    
    /**
     * The identifier that was specified when the statement was added.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=StatementId")
    public String statementId;

    public RemoveLayerVersionPermissionRequest withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
    
    /**
     * The version number.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=VersionNumber")
    public Long versionNumber;

    public RemoveLayerVersionPermissionRequest withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public RemoveLayerVersionPermissionRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public RemoveLayerVersionPermissionRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public RemoveLayerVersionPermissionRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public RemoveLayerVersionPermissionRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public RemoveLayerVersionPermissionRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public RemoveLayerVersionPermissionRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public RemoveLayerVersionPermissionRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public RemoveLayerVersionPermissionRequest(@JsonProperty("LayerName") String layerName, @JsonProperty("StatementId") String statementId, @JsonProperty("VersionNumber") Long versionNumber) {
        this.layerName = layerName;
        this.statementId = statementId;
        this.versionNumber = versionNumber;
  }
}
