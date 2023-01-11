package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ImporterExporterCodeVerificationApi200ApplicationJson {
    @JsonProperty("addressLine1")
    public String addressLine1;
    public ImporterExporterCodeVerificationApi200ApplicationJson withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonProperty("addressLine2")
    public String addressLine2;
    public ImporterExporterCodeVerificationApi200ApplicationJson withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonProperty("branch")
    public Object[] branch;
    public ImporterExporterCodeVerificationApi200ApplicationJson withBranch(Object[] branch) {
        this.branch = branch;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public ImporterExporterCodeVerificationApi200ApplicationJson withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("dataAsOn")
    public OffsetDateTime dataAsOn;
    public ImporterExporterCodeVerificationApi200ApplicationJson withDataAsOn(OffsetDateTime dataAsOn) {
        this.dataAsOn = dataAsOn;
        return this;
    }
    @JsonProperty("directors")
    public Object[] directors;
    public ImporterExporterCodeVerificationApi200ApplicationJson withDirectors(Object[] directors) {
        this.directors = directors;
        return this;
    }
    @JsonProperty("entityName")
    public String entityName;
    public ImporterExporterCodeVerificationApi200ApplicationJson withEntityName(String entityName) {
        this.entityName = entityName;
        return this;
    }
    @JsonProperty("exporterType")
    public String exporterType;
    public ImporterExporterCodeVerificationApi200ApplicationJson withExporterType(String exporterType) {
        this.exporterType = exporterType;
        return this;
    }
    @JsonProperty("iec")
    public String iec;
    public ImporterExporterCodeVerificationApi200ApplicationJson withIec(String iec) {
        this.iec = iec;
        return this;
    }
    @JsonProperty("iecIssueDate")
    public String iecIssueDate;
    public ImporterExporterCodeVerificationApi200ApplicationJson withIecIssueDate(String iecIssueDate) {
        this.iecIssueDate = iecIssueDate;
        return this;
    }
    @JsonProperty("iecModificationDate")
    public String iecModificationDate;
    public ImporterExporterCodeVerificationApi200ApplicationJson withIecModificationDate(String iecModificationDate) {
        this.iecModificationDate = iecModificationDate;
        return this;
    }
    @JsonProperty("iecStatus")
    public String iecStatus;
    public ImporterExporterCodeVerificationApi200ApplicationJson withIecStatus(String iecStatus) {
        this.iecStatus = iecStatus;
        return this;
    }
    @JsonProperty("natureOfConcern")
    public String natureOfConcern;
    public ImporterExporterCodeVerificationApi200ApplicationJson withNatureOfConcern(String natureOfConcern) {
        this.natureOfConcern = natureOfConcern;
        return this;
    }
    @JsonProperty("pan")
    public String pan;
    public ImporterExporterCodeVerificationApi200ApplicationJson withPan(String pan) {
        this.pan = pan;
        return this;
    }
    @JsonProperty("pin")
    public String pin;
    public ImporterExporterCodeVerificationApi200ApplicationJson withPin(String pin) {
        this.pin = pin;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public ImporterExporterCodeVerificationApi200ApplicationJson withState(String state) {
        this.state = state;
        return this;
    }
}