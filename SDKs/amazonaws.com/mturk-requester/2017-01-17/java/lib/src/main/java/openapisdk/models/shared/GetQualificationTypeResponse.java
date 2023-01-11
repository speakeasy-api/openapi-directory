package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQualificationTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualificationType")
    public QualificationType qualificationType;
    public GetQualificationTypeResponse withQualificationType(QualificationType qualificationType) {
        this.qualificationType = qualificationType;
        return this;
    }
}