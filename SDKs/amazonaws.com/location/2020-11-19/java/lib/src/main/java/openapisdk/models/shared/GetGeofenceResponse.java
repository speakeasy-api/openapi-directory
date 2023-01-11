package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetGeofenceResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public GetGeofenceResponse withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("GeofenceId")
    public String geofenceId;
    public GetGeofenceResponse withGeofenceId(String geofenceId) {
        this.geofenceId = geofenceId;
        return this;
    }
    @JsonProperty("Geometry")
    public GeofenceGeometry geometry;
    public GetGeofenceResponse withGeometry(GeofenceGeometry geometry) {
        this.geometry = geometry;
        return this;
    }
    @JsonProperty("Status")
    public String status;
    public GetGeofenceResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public GetGeofenceResponse withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}