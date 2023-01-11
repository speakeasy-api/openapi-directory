package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Insight
 * When fault rates go outside of the expected range, X-Ray creates an insight. Insights tracks emergent issues within your applications.
**/
public class Insight {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Categories")
    public InsightCategoryEnum[] categories;
    public Insight withCategories(InsightCategoryEnum[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestImpactStatistics")
    public RequestImpactStatistics clientRequestImpactStatistics;
    public Insight withClientRequestImpactStatistics(RequestImpactStatistics clientRequestImpactStatistics) {
        this.clientRequestImpactStatistics = clientRequestImpactStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public Insight withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupARN")
    public String groupARN;
    public Insight withGroupArn(String groupARN) {
        this.groupARN = groupARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupName")
    public String groupName;
    public Insight withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightId")
    public String insightId;
    public Insight withInsightId(String insightId) {
        this.insightId = insightId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RootCauseServiceId")
    public ServiceId rootCauseServiceId;
    public Insight withRootCauseServiceId(ServiceId rootCauseServiceId) {
        this.rootCauseServiceId = rootCauseServiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RootCauseServiceRequestImpactStatistics")
    public RequestImpactStatistics rootCauseServiceRequestImpactStatistics;
    public Insight withRootCauseServiceRequestImpactStatistics(RequestImpactStatistics rootCauseServiceRequestImpactStatistics) {
        this.rootCauseServiceRequestImpactStatistics = rootCauseServiceRequestImpactStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public Insight withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public InsightStateEnum state;
    public Insight withState(InsightStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Summary")
    public String summary;
    public Insight withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopAnomalousServices")
    public AnomalousService[] topAnomalousServices;
    public Insight withTopAnomalousServices(AnomalousService[] topAnomalousServices) {
        this.topAnomalousServices = topAnomalousServices;
        return this;
    }
}