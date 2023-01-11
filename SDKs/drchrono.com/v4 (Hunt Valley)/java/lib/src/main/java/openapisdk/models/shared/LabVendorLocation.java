package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LabVendorLocation {
    @JsonProperty("facility_code")
    public String facilityCode;
    public LabVendorLocation withFacilityCode(String facilityCode) {
        this.facilityCode = facilityCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public LabVendorLocation withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LabVendorLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor_name")
    public String vendorName;
    public LabVendorLocation withVendorName(String vendorName) {
        this.vendorName = vendorName;
        return this;
    }
}