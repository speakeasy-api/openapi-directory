package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateQualificationTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualificationType")
    public QualificationType qualificationType;
    public UpdateQualificationTypeResponse withQualificationType(QualificationType qualificationType) {
        this.qualificationType = qualificationType;
        return this;
    }
}