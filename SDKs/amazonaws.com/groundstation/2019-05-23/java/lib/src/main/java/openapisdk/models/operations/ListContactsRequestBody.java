package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListContactsRequestBody {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public ListContactsRequestBody withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groundStation")
    public String groundStation;
    public ListContactsRequestBody withGroundStation(String groundStation) {
        this.groundStation = groundStation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListContactsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missionProfileArn")
    public String missionProfileArn;
    public ListContactsRequestBody withMissionProfileArn(String missionProfileArn) {
        this.missionProfileArn = missionProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListContactsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satelliteArn")
    public String satelliteArn;
    public ListContactsRequestBody withSatelliteArn(String satelliteArn) {
        this.satelliteArn = satelliteArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public ListContactsRequestBody withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("statusList")
    public openapisdk.models.shared.ContactStatusEnum[] statusList;
    public ListContactsRequestBody withStatusList(openapisdk.models.shared.ContactStatusEnum[] statusList) {
        this.statusList = statusList;
        return this;
    }
}