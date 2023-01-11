package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BatchPutGeofenceSuccess
 * Contains a summary of each geofence that was successfully stored in a given geofence collection.
**/
public class BatchPutGeofenceSuccess {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public BatchPutGeofenceSuccess withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("GeofenceId")
    public String geofenceId;
    public BatchPutGeofenceSuccess withGeofenceId(String geofenceId) {
        this.geofenceId = geofenceId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public BatchPutGeofenceSuccess withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}