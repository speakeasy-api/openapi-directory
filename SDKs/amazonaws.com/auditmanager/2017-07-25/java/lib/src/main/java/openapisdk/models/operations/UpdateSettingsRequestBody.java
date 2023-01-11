package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAssessmentReportsDestination")
    public UpdateSettingsRequestBodyDefaultAssessmentReportsDestination defaultAssessmentReportsDestination;
    public UpdateSettingsRequestBody withDefaultAssessmentReportsDestination(UpdateSettingsRequestBodyDefaultAssessmentReportsDestination defaultAssessmentReportsDestination) {
        this.defaultAssessmentReportsDestination = defaultAssessmentReportsDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultProcessOwners")
    public openapisdk.models.shared.Role[] defaultProcessOwners;
    public UpdateSettingsRequestBody withDefaultProcessOwners(openapisdk.models.shared.Role[] defaultProcessOwners) {
        this.defaultProcessOwners = defaultProcessOwners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKey")
    public String kmsKey;
    public UpdateSettingsRequestBody withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snsTopic")
    public String snsTopic;
    public UpdateSettingsRequestBody withSnsTopic(String snsTopic) {
        this.snsTopic = snsTopic;
        return this;
    }
}