package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetServersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedOn")
    public OffsetDateTime lastModifiedOn;
    public GetServersResponse withLastModifiedOn(OffsetDateTime lastModifiedOn) {
        this.lastModifiedOn = lastModifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetServersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCatalogStatus")
    public ServerCatalogStatusEnum serverCatalogStatus;
    public GetServersResponse withServerCatalogStatus(ServerCatalogStatusEnum serverCatalogStatus) {
        this.serverCatalogStatus = serverCatalogStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverList")
    public Server[] serverList;
    public GetServersResponse withServerList(Server[] serverList) {
        this.serverList = serverList;
        return this;
    }
}