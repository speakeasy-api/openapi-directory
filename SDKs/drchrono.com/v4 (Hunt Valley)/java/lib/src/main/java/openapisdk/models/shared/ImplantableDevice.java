package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImplantableDevice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public ImplantableDevice withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_name")
    public String brandName;
    public ImplantableDevice withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_name")
    public String companyName;
    public ImplantableDevice withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public ImplantableDevice withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiration_date")
    public String expirationDate;
    public ImplantableDevice withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmdn_pt_name")
    public String gmdnPtName;
    public ImplantableDevice withGmdnPtName(String gmdnPtName) {
        this.gmdnPtName = gmdnPtName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ImplantableDevice withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturing_date")
    public String manufacturingDate;
    public ImplantableDevice withManufacturingDate(String manufacturingDate) {
        this.manufacturingDate = manufacturingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patient")
    public String patient;
    public ImplantableDevice withPatient(String patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("procedure")
    public String procedure;
    public ImplantableDevice withProcedure(String procedure) {
        this.procedure = procedure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial_number")
    public String serialNumber;
    public ImplantableDevice withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ImplantableDeviceStatusEnum status;
    public ImplantableDevice withStatus(ImplantableDeviceStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("udi")
    public String udi;
    public ImplantableDevice withUdi(String udi) {
        this.udi = udi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public ImplantableDevice withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version_or_model")
    public String versionOrModel;
    public ImplantableDevice withVersionOrModel(String versionOrModel) {
        this.versionOrModel = versionOrModel;
        return this;
    }
}