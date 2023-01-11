package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateMapResponse {
    @JsonProperty("MapArn")
    public String mapArn;
    public UpdateMapResponse withMapArn(String mapArn) {
        this.mapArn = mapArn;
        return this;
    }
    @JsonProperty("MapName")
    public String mapName;
    public UpdateMapResponse withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public UpdateMapResponse withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}