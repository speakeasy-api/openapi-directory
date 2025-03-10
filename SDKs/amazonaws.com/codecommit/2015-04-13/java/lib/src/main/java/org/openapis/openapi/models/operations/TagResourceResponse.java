/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class TagResourceResponse {
    
    public String contentType;

    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InvalidRepositoryNameException
     */
    
    public Object invalidRepositoryNameException;

    public TagResourceResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    
    /**
     * InvalidResourceArnException
     */
    
    public Object invalidResourceArnException;

    public TagResourceResponse withInvalidResourceArnException(Object invalidResourceArnException) {
        this.invalidResourceArnException = invalidResourceArnException;
        return this;
    }
    
    /**
     * InvalidSystemTagUsageException
     */
    
    public Object invalidSystemTagUsageException;

    public TagResourceResponse withInvalidSystemTagUsageException(Object invalidSystemTagUsageException) {
        this.invalidSystemTagUsageException = invalidSystemTagUsageException;
        return this;
    }
    
    /**
     * InvalidTagsMapException
     */
    
    public Object invalidTagsMapException;

    public TagResourceResponse withInvalidTagsMapException(Object invalidTagsMapException) {
        this.invalidTagsMapException = invalidTagsMapException;
        return this;
    }
    
    /**
     * RepositoryDoesNotExistException
     */
    
    public Object repositoryDoesNotExistException;

    public TagResourceResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    
    
    public Integer statusCode;

    public TagResourceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public TagResourceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceArnRequiredException
     */
    
    public Object resourceArnRequiredException;

    public TagResourceResponse withResourceArnRequiredException(Object resourceArnRequiredException) {
        this.resourceArnRequiredException = resourceArnRequiredException;
        return this;
    }
    
    /**
     * TagPolicyException
     */
    
    public Object tagPolicyException;

    public TagResourceResponse withTagPolicyException(Object tagPolicyException) {
        this.tagPolicyException = tagPolicyException;
        return this;
    }
    
    /**
     * TagsMapRequiredException
     */
    
    public Object tagsMapRequiredException;

    public TagResourceResponse withTagsMapRequiredException(Object tagsMapRequiredException) {
        this.tagsMapRequiredException = tagsMapRequiredException;
        return this;
    }
    
    /**
     * TooManyTagsException
     */
    
    public Object tooManyTagsException;

    public TagResourceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
    
    public TagResourceResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
