package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InventoryVaccine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public Long category;
    public InventoryVaccine withCategory(Long category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public Double cost;
    public InventoryVaccine withCost(Double cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public InventoryVaccine withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_quantity")
    public Long currentQuantity;
    public InventoryVaccine withCurrentQuantity(Long currentQuantity) {
        this.currentQuantity = currentQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cvx_code")
    public String cvxCode;
    public InventoryVaccine withCvxCode(String cvxCode) {
        this.cvxCode = cvxCode;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public InventoryVaccine withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiry")
    public String expiry;
    public InventoryVaccine withExpiry(String expiry) {
        this.expiry = expiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public InventoryVaccine withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lot_number")
    public String lotNumber;
    public InventoryVaccine withLotNumber(String lotNumber) {
        this.lotNumber = lotNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public InventoryVaccine withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonProperty("manufacturer_code")
    public String manufacturerCode;
    public InventoryVaccine withManufacturerCode(String manufacturerCode) {
        this.manufacturerCode = manufacturerCode;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public InventoryVaccine withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public InventoryVaccine withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_quantity")
    public Long originalQuantity;
    public InventoryVaccine withOriginalQuantity(Long originalQuantity) {
        this.originalQuantity = originalQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public InventoryVaccine withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_with_tax")
    public Double priceWithTax;
    public InventoryVaccine withPriceWithTax(Double priceWithTax) {
        this.priceWithTax = priceWithTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sales_tax_applicable")
    public Boolean salesTaxApplicable;
    public InventoryVaccine withSalesTaxApplicable(Boolean salesTaxApplicable) {
        this.salesTaxApplicable = salesTaxApplicable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public InventoryVaccineStatusEnum status;
    public InventoryVaccine withStatus(InventoryVaccineStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public InventoryVaccine withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vaccination_type")
    public String vaccinationType;
    public InventoryVaccine withVaccinationType(String vaccinationType) {
        this.vaccinationType = vaccinationType;
        return this;
    }
}