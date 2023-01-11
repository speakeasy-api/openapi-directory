package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateGeofenceCollectionResponse {
    @JsonProperty("CollectionArn")
    public String collectionArn;
    public CreateGeofenceCollectionResponse withCollectionArn(String collectionArn) {
        this.collectionArn = collectionArn;
        return this;
    }
    @JsonProperty("CollectionName")
    public String collectionName;
    public CreateGeofenceCollectionResponse withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public CreateGeofenceCollectionResponse withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
}