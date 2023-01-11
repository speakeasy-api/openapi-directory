package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FunctionalityRightInfo
 * Describe the rights for a functionality
**/
public class FunctionalityRightInfo {
    @JsonProperty("functionalityCode")
    public String functionalityCode;
    public FunctionalityRightInfo withFunctionalityCode(String functionalityCode) {
        this.functionalityCode = functionalityCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValueInterger")
    public Long maxValueInterger;
    public FunctionalityRightInfo withMaxValueInterger(Long maxValueInterger) {
        this.maxValueInterger = maxValueInterger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlimited")
    public Boolean unlimited;
    public FunctionalityRightInfo withUnlimited(Boolean unlimited) {
        this.unlimited = unlimited;
        return this;
    }
}