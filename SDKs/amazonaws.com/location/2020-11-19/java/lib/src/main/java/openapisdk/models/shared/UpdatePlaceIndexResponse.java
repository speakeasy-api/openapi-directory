package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdatePlaceIndexResponse {
    @JsonProperty("IndexArn")
    public String indexArn;
    public UpdatePlaceIndexResponse withIndexArn(String indexArn) {
        this.indexArn = indexArn;
        return this;
    }
    @JsonProperty("IndexName")
    public String indexName;
    public UpdatePlaceIndexResponse withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public UpdatePlaceIndexResponse withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}