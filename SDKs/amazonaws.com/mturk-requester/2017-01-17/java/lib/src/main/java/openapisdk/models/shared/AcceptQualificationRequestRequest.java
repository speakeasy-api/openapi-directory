package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcceptQualificationRequestRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegerValue")
    public Long integerValue;
    public AcceptQualificationRequestRequest withIntegerValue(Long integerValue) {
        this.integerValue = integerValue;
        return this;
    }
    @JsonProperty("QualificationRequestId")
    public String qualificationRequestId;
    public AcceptQualificationRequestRequest withQualificationRequestId(String qualificationRequestId) {
        this.qualificationRequestId = qualificationRequestId;
        return this;
    }
}