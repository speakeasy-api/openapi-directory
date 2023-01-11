package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GetRecommendationsResponse
 * The structure representing the GetRecommendationsResponse.
**/
public class GetRecommendationsResponse {
    @JsonProperty("anomalies")
    public Anomaly[] anomalies;
    public GetRecommendationsResponse withAnomalies(Anomaly[] anomalies) {
        this.anomalies = anomalies;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("profileEndTime")
    public OffsetDateTime profileEndTime;
    public GetRecommendationsResponse withProfileEndTime(OffsetDateTime profileEndTime) {
        this.profileEndTime = profileEndTime;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("profileStartTime")
    public OffsetDateTime profileStartTime;
    public GetRecommendationsResponse withProfileStartTime(OffsetDateTime profileStartTime) {
        this.profileStartTime = profileStartTime;
        return this;
    }
    @JsonProperty("profilingGroupName")
    public String profilingGroupName;
    public GetRecommendationsResponse withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
    @JsonProperty("recommendations")
    public Recommendation[] recommendations;
    public GetRecommendationsResponse withRecommendations(Recommendation[] recommendations) {
        this.recommendations = recommendations;
        return this;
    }
}