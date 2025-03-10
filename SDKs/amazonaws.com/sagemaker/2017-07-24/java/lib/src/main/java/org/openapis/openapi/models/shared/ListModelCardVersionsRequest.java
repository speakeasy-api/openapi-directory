/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class ListModelCardVersionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationTimeAfter")
    public OffsetDateTime creationTimeAfter;

    public ListModelCardVersionsRequest withCreationTimeAfter(OffsetDateTime creationTimeAfter) {
        this.creationTimeAfter = creationTimeAfter;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationTimeBefore")
    public OffsetDateTime creationTimeBefore;

    public ListModelCardVersionsRequest withCreationTimeBefore(OffsetDateTime creationTimeBefore) {
        this.creationTimeBefore = creationTimeBefore;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;

    public ListModelCardVersionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    @JsonProperty("ModelCardName")
    public String modelCardName;

    public ListModelCardVersionsRequest withModelCardName(String modelCardName) {
        this.modelCardName = modelCardName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelCardStatus")
    public ModelCardStatusEnum modelCardStatus;

    public ListModelCardVersionsRequest withModelCardStatus(ModelCardStatusEnum modelCardStatus) {
        this.modelCardStatus = modelCardStatus;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public ListModelCardVersionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortBy")
    public ModelCardVersionSortByEnum sortBy;

    public ListModelCardVersionsRequest withSortBy(ModelCardVersionSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortOrder")
    public ModelCardSortOrderEnum sortOrder;

    public ListModelCardVersionsRequest withSortOrder(ModelCardSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    
    public ListModelCardVersionsRequest(@JsonProperty("ModelCardName") String modelCardName) {
        this.modelCardName = modelCardName;
  }
}
