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
 * Qualification
 * The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).
**/
public class Qualification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("GrantTime")
    public OffsetDateTime grantTime;
    public Qualification withGrantTime(OffsetDateTime grantTime) {
        this.grantTime = grantTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegerValue")
    public Long integerValue;
    public Qualification withIntegerValue(Long integerValue) {
        this.integerValue = integerValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocaleValue")
    public Locale localeValue;
    public Qualification withLocaleValue(Locale localeValue) {
        this.localeValue = localeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualificationTypeId")
    public String qualificationTypeId;
    public Qualification withQualificationTypeId(String qualificationTypeId) {
        this.qualificationTypeId = qualificationTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public QualificationStatusEnum status;
    public Qualification withStatus(QualificationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerId")
    public String workerId;
    public Qualification withWorkerId(String workerId) {
        this.workerId = workerId;
        return this;
    }
}