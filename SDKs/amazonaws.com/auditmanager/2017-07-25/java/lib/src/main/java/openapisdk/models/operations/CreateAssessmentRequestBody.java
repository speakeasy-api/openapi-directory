package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAssessmentRequestBody {
    @JsonProperty("assessmentReportsDestination")
    public CreateAssessmentRequestBodyAssessmentReportsDestination assessmentReportsDestination;
    public CreateAssessmentRequestBody withAssessmentReportsDestination(CreateAssessmentRequestBodyAssessmentReportsDestination assessmentReportsDestination) {
        this.assessmentReportsDestination = assessmentReportsDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateAssessmentRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("frameworkId")
    public String frameworkId;
    public CreateAssessmentRequestBody withFrameworkId(String frameworkId) {
        this.frameworkId = frameworkId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateAssessmentRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("roles")
    public openapisdk.models.shared.Role[] roles;
    public CreateAssessmentRequestBody withRoles(openapisdk.models.shared.Role[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonProperty("scope")
    public CreateAssessmentRequestBodyScope scope;
    public CreateAssessmentRequestBody withScope(CreateAssessmentRequestBodyScope scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateAssessmentRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}