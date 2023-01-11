package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutomotivePartsCompatibilityPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public String categoryId;
    public AutomotivePartsCompatibilityPolicy withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTreeId")
    public String categoryTreeId;
    public AutomotivePartsCompatibilityPolicy withCategoryTreeId(String categoryTreeId) {
        this.categoryTreeId = categoryTreeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibilityBasedOn")
    public String compatibilityBasedOn;
    public AutomotivePartsCompatibilityPolicy withCompatibilityBasedOn(String compatibilityBasedOn) {
        this.compatibilityBasedOn = compatibilityBasedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibleVehicleTypes")
    public String[] compatibleVehicleTypes;
    public AutomotivePartsCompatibilityPolicy withCompatibleVehicleTypes(String[] compatibleVehicleTypes) {
        this.compatibleVehicleTypes = compatibleVehicleTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxNumberOfCompatibleVehicles")
    public Integer maxNumberOfCompatibleVehicles;
    public AutomotivePartsCompatibilityPolicy withMaxNumberOfCompatibleVehicles(Integer maxNumberOfCompatibleVehicles) {
        this.maxNumberOfCompatibleVehicles = maxNumberOfCompatibleVehicles;
        return this;
    }
}