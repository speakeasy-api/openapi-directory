package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateQualificationWithWorkerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegerValue")
    public Long integerValue;
    public AssociateQualificationWithWorkerRequest withIntegerValue(Long integerValue) {
        this.integerValue = integerValue;
        return this;
    }
    @JsonProperty("QualificationTypeId")
    public String qualificationTypeId;
    public AssociateQualificationWithWorkerRequest withQualificationTypeId(String qualificationTypeId) {
        this.qualificationTypeId = qualificationTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SendNotification")
    public Boolean sendNotification;
    public AssociateQualificationWithWorkerRequest withSendNotification(Boolean sendNotification) {
        this.sendNotification = sendNotification;
        return this;
    }
    @JsonProperty("WorkerId")
    public String workerId;
    public AssociateQualificationWithWorkerRequest withWorkerId(String workerId) {
        this.workerId = workerId;
        return this;
    }
}