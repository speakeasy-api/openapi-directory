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
 * QualificationRequest
 *  The QualificationRequest data structure represents a request a Worker has made for a Qualification. 
**/
public class QualificationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Answer")
    public String answer;
    public QualificationRequest withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualificationRequestId")
    public String qualificationRequestId;
    public QualificationRequest withQualificationRequestId(String qualificationRequestId) {
        this.qualificationRequestId = qualificationRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualificationTypeId")
    public String qualificationTypeId;
    public QualificationRequest withQualificationTypeId(String qualificationTypeId) {
        this.qualificationTypeId = qualificationTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmitTime")
    public OffsetDateTime submitTime;
    public QualificationRequest withSubmitTime(OffsetDateTime submitTime) {
        this.submitTime = submitTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Test")
    public String test;
    public QualificationRequest withTest(String test) {
        this.test = test;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerId")
    public String workerId;
    public QualificationRequest withWorkerId(String workerId) {
        this.workerId = workerId;
        return this;
    }
}