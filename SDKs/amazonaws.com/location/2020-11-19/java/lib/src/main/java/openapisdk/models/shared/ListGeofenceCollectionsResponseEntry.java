package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ListGeofenceCollectionsResponseEntry
 * Contains the geofence collection details.
**/
public class ListGeofenceCollectionsResponseEntry {
    @JsonProperty("CollectionName")
    public String collectionName;
    public ListGeofenceCollectionsResponseEntry withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public ListGeofenceCollectionsResponseEntry withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public ListGeofenceCollectionsResponseEntry withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("PricingPlan")
    public PricingPlanEnum pricingPlan;
    public ListGeofenceCollectionsResponseEntry withPricingPlan(PricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PricingPlanDataSource")
    public String pricingPlanDataSource;
    public ListGeofenceCollectionsResponseEntry withPricingPlanDataSource(String pricingPlanDataSource) {
        this.pricingPlanDataSource = pricingPlanDataSource;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public ListGeofenceCollectionsResponseEntry withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}