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

/**
 * OpsItemRelatedItemSummary - Summary information about related-item resources for an OpsItem.
 */
public class OpsItemRelatedItemSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociationId")
    public String associationId;

    public OpsItemRelatedItemSummary withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociationType")
    public String associationType;

    public OpsItemRelatedItemSummary withAssociationType(String associationType) {
        this.associationType = associationType;
        return this;
    }
    
    /**
     * Information about the user or resource that created an OpsItem event.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedBy")
    public OpsItemIdentity createdBy;

    public OpsItemRelatedItemSummary withCreatedBy(OpsItemIdentity createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreatedTime")
    public OffsetDateTime createdTime;

    public OpsItemRelatedItemSummary withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    
    /**
     * Information about the user or resource that created an OpsItem event.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedBy")
    public OpsItemIdentity lastModifiedBy;

    public OpsItemRelatedItemSummary withLastModifiedBy(OpsItemIdentity lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTime")
    public OffsetDateTime lastModifiedTime;

    public OpsItemRelatedItemSummary withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpsItemId")
    public String opsItemId;

    public OpsItemRelatedItemSummary withOpsItemId(String opsItemId) {
        this.opsItemId = opsItemId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public String resourceType;

    public OpsItemRelatedItemSummary withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceUri")
    public String resourceUri;

    public OpsItemRelatedItemSummary withResourceUri(String resourceUri) {
        this.resourceUri = resourceUri;
        return this;
    }
    
    public OpsItemRelatedItemSummary(){}
}
