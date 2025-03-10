/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListServiceNetworkServiceAssociationsRequest {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public ListServiceNetworkServiceAssociationsRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public ListServiceNetworkServiceAssociationsRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public ListServiceNetworkServiceAssociationsRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public ListServiceNetworkServiceAssociationsRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public ListServiceNetworkServiceAssociationsRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public ListServiceNetworkServiceAssociationsRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public ListServiceNetworkServiceAssociationsRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    /**
     * The maximum number of results to return.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;

    public ListServiceNetworkServiceAssociationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * A pagination token for the next page of results.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;

    public ListServiceNetworkServiceAssociationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    /**
     * The ID or Amazon Resource Name (ARN) of the service.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceIdentifier")
    public String serviceIdentifier;

    public ListServiceNetworkServiceAssociationsRequest withServiceIdentifier(String serviceIdentifier) {
        this.serviceIdentifier = serviceIdentifier;
        return this;
    }
    
    /**
     * The ID or Amazon Resource Name (ARN) of the service network.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceNetworkIdentifier")
    public String serviceNetworkIdentifier;

    public ListServiceNetworkServiceAssociationsRequest withServiceNetworkIdentifier(String serviceNetworkIdentifier) {
        this.serviceNetworkIdentifier = serviceNetworkIdentifier;
        return this;
    }
    
    public ListServiceNetworkServiceAssociationsRequest(){}
}
