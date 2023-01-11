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
 * InsightEvent
 * X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.
**/
public class InsightEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestImpactStatistics")
    public RequestImpactStatistics clientRequestImpactStatistics;
    public InsightEvent withClientRequestImpactStatistics(RequestImpactStatistics clientRequestImpactStatistics) {
        this.clientRequestImpactStatistics = clientRequestImpactStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EventTime")
    public OffsetDateTime eventTime;
    public InsightEvent withEventTime(OffsetDateTime eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RootCauseServiceRequestImpactStatistics")
    public RequestImpactStatistics rootCauseServiceRequestImpactStatistics;
    public InsightEvent withRootCauseServiceRequestImpactStatistics(RequestImpactStatistics rootCauseServiceRequestImpactStatistics) {
        this.rootCauseServiceRequestImpactStatistics = rootCauseServiceRequestImpactStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Summary")
    public String summary;
    public InsightEvent withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopAnomalousServices")
    public AnomalousService[] topAnomalousServices;
    public InsightEvent withTopAnomalousServices(AnomalousService[] topAnomalousServices) {
        this.topAnomalousServices = topAnomalousServices;
        return this;
    }
}