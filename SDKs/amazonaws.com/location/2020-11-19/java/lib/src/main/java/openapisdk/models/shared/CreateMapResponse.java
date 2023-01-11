package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateMapResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public CreateMapResponse withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("MapArn")
    public String mapArn;
    public CreateMapResponse withMapArn(String mapArn) {
        this.mapArn = mapArn;
        return this;
    }
    @JsonProperty("MapName")
    public String mapName;
    public CreateMapResponse withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
}