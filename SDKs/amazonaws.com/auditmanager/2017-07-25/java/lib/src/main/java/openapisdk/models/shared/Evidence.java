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
 * Evidence
 *  A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity triggered by a user, or a system configuration snapshot. 
**/
public class Evidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentReportSelection")
    public String assessmentReportSelection;
    public Evidence withAssessmentReportSelection(String assessmentReportSelection) {
        this.assessmentReportSelection = assessmentReportSelection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public Evidence withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsAccountId")
    public String awsAccountId;
    public Evidence withAwsAccountId(String awsAccountId) {
        this.awsAccountId = awsAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsOrganization")
    public String awsOrganization;
    public Evidence withAwsOrganization(String awsOrganization) {
        this.awsOrganization = awsOrganization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceCheck")
    public String complianceCheck;
    public Evidence withComplianceCheck(String complianceCheck) {
        this.complianceCheck = complianceCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSource")
    public String dataSource;
    public Evidence withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventName")
    public String eventName;
    public Evidence withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventSource")
    public String eventSource;
    public Evidence withEventSource(String eventSource) {
        this.eventSource = eventSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceAwsAccountId")
    public String evidenceAwsAccountId;
    public Evidence withEvidenceAwsAccountId(String evidenceAwsAccountId) {
        this.evidenceAwsAccountId = evidenceAwsAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceByType")
    public String evidenceByType;
    public Evidence withEvidenceByType(String evidenceByType) {
        this.evidenceByType = evidenceByType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceFolderId")
    public String evidenceFolderId;
    public Evidence withEvidenceFolderId(String evidenceFolderId) {
        this.evidenceFolderId = evidenceFolderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamId")
    public String iamId;
    public Evidence withIamId(String iamId) {
        this.iamId = iamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Evidence withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcesIncluded")
    public Resource[] resourcesIncluded;
    public Evidence withResourcesIncluded(Resource[] resourcesIncluded) {
        this.resourcesIncluded = resourcesIncluded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("time")
    public OffsetDateTime time;
    public Evidence withTime(OffsetDateTime time) {
        this.time = time;
        return this;
    }
}