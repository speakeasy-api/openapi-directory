/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NetAppONTAPCluster - The information that DataSync Discovery collects about an on-premises storage system cluster.
 */
public class NetAppONTAPCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CifsShareCount")
    public Long cifsShareCount;

    public NetAppONTAPCluster withCifsShareCount(Long cifsShareCount) {
        this.cifsShareCount = cifsShareCount;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterBlockStorageLogicalUsed")
    public Long clusterBlockStorageLogicalUsed;

    public NetAppONTAPCluster withClusterBlockStorageLogicalUsed(Long clusterBlockStorageLogicalUsed) {
        this.clusterBlockStorageLogicalUsed = clusterBlockStorageLogicalUsed;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterBlockStorageSize")
    public Long clusterBlockStorageSize;

    public NetAppONTAPCluster withClusterBlockStorageSize(Long clusterBlockStorageSize) {
        this.clusterBlockStorageSize = clusterBlockStorageSize;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterBlockStorageUsed")
    public Long clusterBlockStorageUsed;

    public NetAppONTAPCluster withClusterBlockStorageUsed(Long clusterBlockStorageUsed) {
        this.clusterBlockStorageUsed = clusterBlockStorageUsed;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterName")
    public String clusterName;

    public NetAppONTAPCluster withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxP95Performance")
    public MaxP95Performance maxP95Performance;

    public NetAppONTAPCluster withMaxP95Performance(MaxP95Performance maxP95Performance) {
        this.maxP95Performance = maxP95Performance;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NfsExportedVolumes")
    public Long nfsExportedVolumes;

    public NetAppONTAPCluster withNfsExportedVolumes(Long nfsExportedVolumes) {
        this.nfsExportedVolumes = nfsExportedVolumes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationStatus")
    public RecommendationStatusEnum recommendationStatus;

    public NetAppONTAPCluster withRecommendationStatus(RecommendationStatusEnum recommendationStatus) {
        this.recommendationStatus = recommendationStatus;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Recommendations")
    public Recommendation[] recommendations;

    public NetAppONTAPCluster withRecommendations(Recommendation[] recommendations) {
        this.recommendations = recommendations;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;

    public NetAppONTAPCluster withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    
    public NetAppONTAPCluster(){}
}
