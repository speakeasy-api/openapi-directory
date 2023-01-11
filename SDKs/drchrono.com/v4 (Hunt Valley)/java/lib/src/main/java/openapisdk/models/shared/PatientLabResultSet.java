package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientLabResultSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public PatientLabResultSet withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_test_performed")
    public String dateTestPerformed;
    public PatientLabResultSet withDateTestPerformed(String dateTestPerformed) {
        this.dateTestPerformed = dateTestPerformed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor_comments")
    public String doctorComments;
    public PatientLabResultSet withDoctorComments(String doctorComments) {
        this.doctorComments = doctorComments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor_signoff")
    public Boolean doctorSignoff;
    public PatientLabResultSet withDoctorSignoff(Boolean doctorSignoff) {
        this.doctorSignoff = doctorSignoff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PatientLabResultSet withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lab_abnormal_flag")
    public PatientLabResultSetAbnormalFlagEnum labAbnormalFlag;
    public PatientLabResultSet withLabAbnormalFlag(PatientLabResultSetAbnormalFlagEnum labAbnormalFlag) {
        this.labAbnormalFlag = labAbnormalFlag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lab_imported_from_ccr")
    public String labImportedFromCcr;
    public PatientLabResultSet withLabImportedFromCcr(String labImportedFromCcr) {
        this.labImportedFromCcr = labImportedFromCcr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lab_normal_range")
    public String labNormalRange;
    public PatientLabResultSet withLabNormalRange(String labNormalRange) {
        this.labNormalRange = labNormalRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lab_normal_range_units")
    public String labNormalRangeUnits;
    public PatientLabResultSet withLabNormalRangeUnits(String labNormalRangeUnits) {
        this.labNormalRangeUnits = labNormalRangeUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lab_order_status")
    public PatientLabResultSetStatusEnum labOrderStatus;
    public PatientLabResultSet withLabOrderStatus(PatientLabResultSetStatusEnum labOrderStatus) {
        this.labOrderStatus = labOrderStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lab_result_value")
    public String labResultValue;
    public PatientLabResultSet withLabResultValue(String labResultValue) {
        this.labResultValue = labResultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lab_result_value_as_float")
    public Double labResultValueAsFloat;
    public PatientLabResultSet withLabResultValueAsFloat(Double labResultValueAsFloat) {
        this.labResultValueAsFloat = labResultValueAsFloat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lab_result_value_units")
    public String labResultValueUnits;
    public PatientLabResultSet withLabResultValueUnits(String labResultValueUnits) {
        this.labResultValueUnits = labResultValueUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loinc_code")
    public String loincCode;
    public PatientLabResultSet withLoincCode(String loincCode) {
        this.loincCode = loincCode;
        return this;
    }
    @JsonProperty("ordering_doctor")
    public Long orderingDoctor;
    public PatientLabResultSet withOrderingDoctor(Long orderingDoctor) {
        this.orderingDoctor = orderingDoctor;
        return this;
    }
    @JsonProperty("patient")
    public Long patient;
    public PatientLabResultSet withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scanned_in_result")
    public String scannedInResult;
    public PatientLabResultSet withScannedInResult(String scannedInResult) {
        this.scannedInResult = scannedInResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PatientLabResultSet withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public PatientLabResultSet withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}