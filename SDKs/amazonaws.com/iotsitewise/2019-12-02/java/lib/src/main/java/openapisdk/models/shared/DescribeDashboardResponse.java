package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeDashboardResponse {
    @JsonProperty("dashboardArn")
    public String dashboardArn;
    public DescribeDashboardResponse withDashboardArn(String dashboardArn) {
        this.dashboardArn = dashboardArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("dashboardCreationDate")
    public OffsetDateTime dashboardCreationDate;
    public DescribeDashboardResponse withDashboardCreationDate(OffsetDateTime dashboardCreationDate) {
        this.dashboardCreationDate = dashboardCreationDate;
        return this;
    }
    @JsonProperty("dashboardDefinition")
    public String dashboardDefinition;
    public DescribeDashboardResponse withDashboardDefinition(String dashboardDefinition) {
        this.dashboardDefinition = dashboardDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dashboardDescription")
    public String dashboardDescription;
    public DescribeDashboardResponse withDashboardDescription(String dashboardDescription) {
        this.dashboardDescription = dashboardDescription;
        return this;
    }
    @JsonProperty("dashboardId")
    public String dashboardId;
    public DescribeDashboardResponse withDashboardId(String dashboardId) {
        this.dashboardId = dashboardId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("dashboardLastUpdateDate")
    public OffsetDateTime dashboardLastUpdateDate;
    public DescribeDashboardResponse withDashboardLastUpdateDate(OffsetDateTime dashboardLastUpdateDate) {
        this.dashboardLastUpdateDate = dashboardLastUpdateDate;
        return this;
    }
    @JsonProperty("dashboardName")
    public String dashboardName;
    public DescribeDashboardResponse withDashboardName(String dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    }
    @JsonProperty("projectId")
    public String projectId;
    public DescribeDashboardResponse withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}