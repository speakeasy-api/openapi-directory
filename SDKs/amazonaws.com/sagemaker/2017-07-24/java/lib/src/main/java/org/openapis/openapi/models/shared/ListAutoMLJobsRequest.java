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

public class ListAutoMLJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationTimeAfter")
    public OffsetDateTime creationTimeAfter;

    public ListAutoMLJobsRequest withCreationTimeAfter(OffsetDateTime creationTimeAfter) {
        this.creationTimeAfter = creationTimeAfter;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationTimeBefore")
    public OffsetDateTime creationTimeBefore;

    public ListAutoMLJobsRequest withCreationTimeBefore(OffsetDateTime creationTimeBefore) {
        this.creationTimeBefore = creationTimeBefore;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTimeAfter")
    public OffsetDateTime lastModifiedTimeAfter;

    public ListAutoMLJobsRequest withLastModifiedTimeAfter(OffsetDateTime lastModifiedTimeAfter) {
        this.lastModifiedTimeAfter = lastModifiedTimeAfter;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTimeBefore")
    public OffsetDateTime lastModifiedTimeBefore;

    public ListAutoMLJobsRequest withLastModifiedTimeBefore(OffsetDateTime lastModifiedTimeBefore) {
        this.lastModifiedTimeBefore = lastModifiedTimeBefore;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;

    public ListAutoMLJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NameContains")
    public String nameContains;

    public ListAutoMLJobsRequest withNameContains(String nameContains) {
        this.nameContains = nameContains;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public ListAutoMLJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortBy")
    public AutoMLSortByEnum sortBy;

    public ListAutoMLJobsRequest withSortBy(AutoMLSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortOrder")
    public AutoMLSortOrderEnum sortOrder;

    public ListAutoMLJobsRequest withSortOrder(AutoMLSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusEquals")
    public AutoMLJobStatusEnum statusEquals;

    public ListAutoMLJobsRequest withStatusEquals(AutoMLJobStatusEnum statusEquals) {
        this.statusEquals = statusEquals;
        return this;
    }
    
    public ListAutoMLJobsRequest(){}
}
