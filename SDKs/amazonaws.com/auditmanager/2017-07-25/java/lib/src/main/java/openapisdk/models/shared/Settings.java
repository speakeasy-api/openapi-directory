package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Settings
 *  The settings object that holds all supported Audit Manager settings. 
**/
public class Settings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAssessmentReportsDestination")
    public AssessmentReportsDestination defaultAssessmentReportsDestination;
    public Settings withDefaultAssessmentReportsDestination(AssessmentReportsDestination defaultAssessmentReportsDestination) {
        this.defaultAssessmentReportsDestination = defaultAssessmentReportsDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultProcessOwners")
    public Role[] defaultProcessOwners;
    public Settings withDefaultProcessOwners(Role[] defaultProcessOwners) {
        this.defaultProcessOwners = defaultProcessOwners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAwsOrgEnabled")
    public Boolean isAwsOrgEnabled;
    public Settings withIsAwsOrgEnabled(Boolean isAwsOrgEnabled) {
        this.isAwsOrgEnabled = isAwsOrgEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKey")
    public String kmsKey;
    public Settings withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snsTopic")
    public String snsTopic;
    public Settings withSnsTopic(String snsTopic) {
        this.snsTopic = snsTopic;
        return this;
    }
}