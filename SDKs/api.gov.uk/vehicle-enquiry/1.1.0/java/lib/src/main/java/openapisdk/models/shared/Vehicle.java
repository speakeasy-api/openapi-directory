package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Vehicle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artEndDate")
    public LocalDate artEndDate;
    public Vehicle withArtEndDate(LocalDate artEndDate) {
        this.artEndDate = artEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("co2Emissions")
    public Integer co2Emissions;
    public Vehicle withCo2Emissions(Integer co2Emissions) {
        this.co2Emissions = co2Emissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colour")
    public String colour;
    public Vehicle withColour(String colour) {
        this.colour = colour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateOfLastV5CIssued")
    public LocalDate dateOfLastV5CIssued;
    public Vehicle withDateOfLastV5CIssued(LocalDate dateOfLastV5CIssued) {
        this.dateOfLastV5CIssued = dateOfLastV5CIssued;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engineCapacity")
    public Integer engineCapacity;
    public Vehicle withEngineCapacity(Integer engineCapacity) {
        this.engineCapacity = engineCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("euroStatus")
    public String euroStatus;
    public Vehicle withEuroStatus(String euroStatus) {
        this.euroStatus = euroStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fuelType")
    public String fuelType;
    public Vehicle withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make")
    public String make;
    public Vehicle withMake(String make) {
        this.make = make;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markedForExport")
    public Boolean markedForExport;
    public Vehicle withMarkedForExport(Boolean markedForExport) {
        this.markedForExport = markedForExport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthOfFirstDvlaRegistration")
    public LocalDate monthOfFirstDvlaRegistration;
    public Vehicle withMonthOfFirstDvlaRegistration(LocalDate monthOfFirstDvlaRegistration) {
        this.monthOfFirstDvlaRegistration = monthOfFirstDvlaRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthOfFirstRegistration")
    public LocalDate monthOfFirstRegistration;
    public Vehicle withMonthOfFirstRegistration(LocalDate monthOfFirstRegistration) {
        this.monthOfFirstRegistration = monthOfFirstRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("motExpiryDate")
    public LocalDate motExpiryDate;
    public Vehicle withMotExpiryDate(LocalDate motExpiryDate) {
        this.motExpiryDate = motExpiryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("motStatus")
    public VehicleMotStatusEnum motStatus;
    public Vehicle withMotStatus(VehicleMotStatusEnum motStatus) {
        this.motStatus = motStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("realDrivingEmissions")
    public String realDrivingEmissions;
    public Vehicle withRealDrivingEmissions(String realDrivingEmissions) {
        this.realDrivingEmissions = realDrivingEmissions;
        return this;
    }
    @JsonProperty("registrationNumber")
    public String registrationNumber;
    public Vehicle withRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueWeight")
    public Integer revenueWeight;
    public Vehicle withRevenueWeight(Integer revenueWeight) {
        this.revenueWeight = revenueWeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxDueDate")
    public LocalDate taxDueDate;
    public Vehicle withTaxDueDate(LocalDate taxDueDate) {
        this.taxDueDate = taxDueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxStatus")
    public VehicleTaxStatusEnum taxStatus;
    public Vehicle withTaxStatus(VehicleTaxStatusEnum taxStatus) {
        this.taxStatus = taxStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("typeApproval")
    public String typeApproval;
    public Vehicle withTypeApproval(String typeApproval) {
        this.typeApproval = typeApproval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wheelplan")
    public String wheelplan;
    public Vehicle withWheelplan(String wheelplan) {
        this.wheelplan = wheelplan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yearOfManufacture")
    public Integer yearOfManufacture;
    public Vehicle withYearOfManufacture(Integer yearOfManufacture) {
        this.yearOfManufacture = yearOfManufacture;
        return this;
    }
}