/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CollectorResponse - Describes a Fleet Advisor collector.
 */
public class CollectorResponse {
    /**
     * Describes the last Fleet Advisor collector health check.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CollectorHealthCheck")
    public CollectorHealthCheck collectorHealthCheck;

    public CollectorResponse withCollectorHealthCheck(CollectorHealthCheck collectorHealthCheck) {
        this.collectorHealthCheck = collectorHealthCheck;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CollectorName")
    public String collectorName;

    public CollectorResponse withCollectorName(String collectorName) {
        this.collectorName = collectorName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CollectorReferencedId")
    public String collectorReferencedId;

    public CollectorResponse withCollectorReferencedId(String collectorReferencedId) {
        this.collectorReferencedId = collectorReferencedId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CollectorVersion")
    public String collectorVersion;

    public CollectorResponse withCollectorVersion(String collectorVersion) {
        this.collectorVersion = collectorVersion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public String createdDate;

    public CollectorResponse withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;

    public CollectorResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Describes a Fleet Advisor collector inventory.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InventoryData")
    public InventoryData inventoryData;

    public CollectorResponse withInventoryData(InventoryData inventoryData) {
        this.inventoryData = inventoryData;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastDataReceived")
    public String lastDataReceived;

    public CollectorResponse withLastDataReceived(String lastDataReceived) {
        this.lastDataReceived = lastDataReceived;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModifiedDate")
    public String modifiedDate;

    public CollectorResponse withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegisteredDate")
    public String registeredDate;

    public CollectorResponse withRegisteredDate(String registeredDate) {
        this.registeredDate = registeredDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BucketName")
    public String s3BucketName;

    public CollectorResponse withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceAccessRoleArn")
    public String serviceAccessRoleArn;

    public CollectorResponse withServiceAccessRoleArn(String serviceAccessRoleArn) {
        this.serviceAccessRoleArn = serviceAccessRoleArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionStatus")
    public VersionStatusEnum versionStatus;

    public CollectorResponse withVersionStatus(VersionStatusEnum versionStatus) {
        this.versionStatus = versionStatus;
        return this;
    }
    
    public CollectorResponse(){}
}
