package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreatePlaceIndexResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public CreatePlaceIndexResponse withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("IndexArn")
    public String indexArn;
    public CreatePlaceIndexResponse withIndexArn(String indexArn) {
        this.indexArn = indexArn;
        return this;
    }
    @JsonProperty("IndexName")
    public String indexName;
    public CreatePlaceIndexResponse withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
}