package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateGeofenceCollectionResponse {
    @JsonProperty("CollectionArn")
    public String collectionArn;
    public UpdateGeofenceCollectionResponse withCollectionArn(String collectionArn) {
        this.collectionArn = collectionArn;
        return this;
    }
    @JsonProperty("CollectionName")
    public String collectionName;
    public UpdateGeofenceCollectionResponse withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public UpdateGeofenceCollectionResponse withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}