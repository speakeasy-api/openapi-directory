/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class POSTDescribeDBSnapshotsRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public POSTDescribeDBSnapshotsActionEnum action;

    public POSTDescribeDBSnapshotsRequest withAction(POSTDescribeDBSnapshotsActionEnum action) {
        this.action = action;
        return this;
    }
    
    /**
     * Pagination token
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;

    public POSTDescribeDBSnapshotsRequest withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    
    /**
     * Pagination limit
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;

    public POSTDescribeDBSnapshotsRequest withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] requestBody;

    public POSTDescribeDBSnapshotsRequest withRequestBody(byte[] requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public POSTDescribeDBSnapshotsVersionEnum version;

    public POSTDescribeDBSnapshotsRequest withVersion(POSTDescribeDBSnapshotsVersionEnum version) {
        this.version = version;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public POSTDescribeDBSnapshotsRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public POSTDescribeDBSnapshotsRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public POSTDescribeDBSnapshotsRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public POSTDescribeDBSnapshotsRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public POSTDescribeDBSnapshotsRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public POSTDescribeDBSnapshotsRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public POSTDescribeDBSnapshotsRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    public POSTDescribeDBSnapshotsRequest(@JsonProperty("Action") POSTDescribeDBSnapshotsActionEnum action, @JsonProperty("Version") POSTDescribeDBSnapshotsVersionEnum version) {
        this.action = action;
        this.version = version;
  }
}
