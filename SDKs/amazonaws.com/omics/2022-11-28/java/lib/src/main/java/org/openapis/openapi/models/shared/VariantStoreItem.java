/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * VariantStoreItem - A variant store.
 */
public class VariantStoreItem {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;

    public VariantStoreItem withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    
    @JsonProperty("description")
    public String description;

    public VariantStoreItem withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonProperty("id")
    public String id;

    public VariantStoreItem withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonProperty("name")
    public String name;

    public VariantStoreItem withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonProperty("reference")
    public ReferenceItem reference;

    public VariantStoreItem withReference(ReferenceItem reference) {
        this.reference = reference;
        return this;
    }
    
    @JsonProperty("sseConfig")
    public SseConfig sseConfig;

    public VariantStoreItem withSseConfig(SseConfig sseConfig) {
        this.sseConfig = sseConfig;
        return this;
    }
    
    @JsonProperty("status")
    public StoreStatusEnum status;

    public VariantStoreItem withStatus(StoreStatusEnum status) {
        this.status = status;
        return this;
    }
    
    @JsonProperty("statusMessage")
    public String statusMessage;

    public VariantStoreItem withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    
    @JsonProperty("storeArn")
    public String storeArn;

    public VariantStoreItem withStoreArn(String storeArn) {
        this.storeArn = storeArn;
        return this;
    }
    
    @JsonProperty("storeSizeBytes")
    public Long storeSizeBytes;

    public VariantStoreItem withStoreSizeBytes(Long storeSizeBytes) {
        this.storeSizeBytes = storeSizeBytes;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updateTime")
    public OffsetDateTime updateTime;

    public VariantStoreItem withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    
    public VariantStoreItem(@JsonProperty("creationTime") OffsetDateTime creationTime, @JsonProperty("description") String description, @JsonProperty("id") String id, @JsonProperty("name") String name, @JsonProperty("reference") ReferenceItem reference, @JsonProperty("sseConfig") SseConfig sseConfig, @JsonProperty("status") StoreStatusEnum status, @JsonProperty("statusMessage") String statusMessage, @JsonProperty("storeArn") String storeArn, @JsonProperty("storeSizeBytes") Long storeSizeBytes, @JsonProperty("updateTime") OffsetDateTime updateTime) {
        this.creationTime = creationTime;
        this.description = description;
        this.id = id;
        this.name = name;
        this.reference = reference;
        this.sseConfig = sseConfig;
        this.status = status;
        this.statusMessage = statusMessage;
        this.storeArn = storeArn;
        this.storeSizeBytes = storeSizeBytes;
        this.updateTime = updateTime;
  }
}
