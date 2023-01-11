package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LabTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public LabTest withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_date")
    public String collectionDate;
    public LabTest withCollectionDate(String collectionDate) {
        this.collectionDate = collectionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public LabTest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public LabTest withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal_notes")
    public String internalNotes;
    public LabTest withInternalNotes(String internalNotes) {
        this.internalNotes = internalNotes;
        return this;
    }
    @JsonProperty("lab_order")
    public Long labOrder;
    public LabTest withLabOrder(Long labOrder) {
        this.labOrder = labOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LabTest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_notes")
    public String reportNotes;
    public LabTest withReportNotes(String reportNotes) {
        this.reportNotes = reportNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specimen_condition")
    public String specimenCondition;
    public LabTest withSpecimenCondition(String specimenCondition) {
        this.specimenCondition = specimenCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specimen_source")
    public String specimenSource;
    public LabTest withSpecimenSource(String specimenSource) {
        this.specimenSource = specimenSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specimen_total_volume")
    public Double specimenTotalVolume;
    public LabTest withSpecimenTotalVolume(Double specimenTotalVolume) {
        this.specimenTotalVolume = specimenTotalVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public LabTestStatusEnum status;
    public LabTest withStatus(LabTestStatusEnum status) {
        this.status = status;
        return this;
    }
}