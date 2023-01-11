package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LabResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abnormal_status")
    public LabResultAbnormalStatusEnum abnormalStatus;
    public LabResult withAbnormalStatus(LabResultAbnormalStatusEnum abnormalStatus) {
        this.abnormalStatus = abnormalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public LabResult withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("document")
    public Long document;
    public LabResult withDocument(Long document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_code")
    public String groupCode;
    public LabResult withGroupCode(String groupCode) {
        this.groupCode = groupCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public LabResult withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_abnormal")
    public String isAbnormal;
    public LabResult withIsAbnormal(String isAbnormal) {
        this.isAbnormal = isAbnormal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lab_order")
    public String labOrder;
    public LabResult withLabOrder(String labOrder) {
        this.labOrder = labOrder;
        return this;
    }
    @JsonProperty("lab_test")
    public Long labTest;
    public LabResult withLabTest(Long labTest) {
        this.labTest = labTest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("normal_range")
    public String normalRange;
    public LabResult withNormalRange(String normalRange) {
        this.normalRange = normalRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observation_code")
    public String observationCode;
    public LabResult withObservationCode(String observationCode) {
        this.observationCode = observationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observation_description")
    public String observationDescription;
    public LabResult withObservationDescription(String observationDescription) {
        this.observationDescription = observationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specimen_received")
    public String specimenReceived;
    public LabResult withSpecimenReceived(String specimenReceived) {
        this.specimenReceived = specimenReceived;
        return this;
    }
    @JsonProperty("status")
    public LabResultStatusEnum status;
    public LabResult withStatus(LabResultStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("test_performed")
    public String testPerformed;
    public LabResult withTestPerformed(String testPerformed) {
        this.testPerformed = testPerformed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public LabResult withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public LabResult withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value_is_numeric")
    public Boolean valueIsNumeric;
    public LabResult withValueIsNumeric(Boolean valueIsNumeric) {
        this.valueIsNumeric = valueIsNumeric;
        return this;
    }
}