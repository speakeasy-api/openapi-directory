/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetArtifactVersionMetaDataByContentRawRequest {
    /**
     * The content of an artifact version.
     */
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] requestBody;

    public GetArtifactVersionMetaDataByContentRawRequest withRequestBody(byte[] requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;

    public GetArtifactVersionMetaDataByContentRawRequest withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    
    /**
     * Parameter that can be set to `true` to indicate that the server should "canonicalize" the content when searching for a matching version.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=canonical")
    public Boolean canonical;

    public GetArtifactVersionMetaDataByContentRawRequest withCanonical(Boolean canonical) {
        this.canonical = canonical;
        return this;
    }
    
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;

    public GetArtifactVersionMetaDataByContentRawRequest withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    
    public GetArtifactVersionMetaDataByContentRawRequest(@JsonProperty("RequestBody") byte[] requestBody, @JsonProperty("artifactId") String artifactId, @JsonProperty("groupId") String groupId) {
        this.requestBody = requestBody;
        this.artifactId = artifactId;
        this.groupId = groupId;
  }
}
