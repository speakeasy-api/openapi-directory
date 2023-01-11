package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeProjectResponse {
    @JsonProperty("portalId")
    public String portalId;
    public DescribeProjectResponse withPortalId(String portalId) {
        this.portalId = portalId;
        return this;
    }
    @JsonProperty("projectArn")
    public String projectArn;
    public DescribeProjectResponse withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("projectCreationDate")
    public OffsetDateTime projectCreationDate;
    public DescribeProjectResponse withProjectCreationDate(OffsetDateTime projectCreationDate) {
        this.projectCreationDate = projectCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectDescription")
    public String projectDescription;
    public DescribeProjectResponse withProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
        return this;
    }
    @JsonProperty("projectId")
    public String projectId;
    public DescribeProjectResponse withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("projectLastUpdateDate")
    public OffsetDateTime projectLastUpdateDate;
    public DescribeProjectResponse withProjectLastUpdateDate(OffsetDateTime projectLastUpdateDate) {
        this.projectLastUpdateDate = projectLastUpdateDate;
        return this;
    }
    @JsonProperty("projectName")
    public String projectName;
    public DescribeProjectResponse withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}