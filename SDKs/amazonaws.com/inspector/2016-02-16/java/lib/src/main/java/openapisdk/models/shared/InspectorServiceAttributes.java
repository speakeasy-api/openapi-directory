package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InspectorServiceAttributes
 * This data type is used in the <a>Finding</a> data type.
**/
public class InspectorServiceAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentRunArn")
    public String assessmentRunArn;
    public InspectorServiceAttributes withAssessmentRunArn(String assessmentRunArn) {
        this.assessmentRunArn = assessmentRunArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesPackageArn")
    public String rulesPackageArn;
    public InspectorServiceAttributes withRulesPackageArn(String rulesPackageArn) {
        this.rulesPackageArn = rulesPackageArn;
        return this;
    }
    @JsonProperty("schemaVersion")
    public Long schemaVersion;
    public InspectorServiceAttributes withSchemaVersion(Long schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
}