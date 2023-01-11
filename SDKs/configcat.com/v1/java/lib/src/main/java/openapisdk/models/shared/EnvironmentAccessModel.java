package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnvironmentAccessModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentAccessType")
    public EnvironmentAccessTypeEnum environmentAccessType;
    public EnvironmentAccessModel withEnvironmentAccessType(EnvironmentAccessTypeEnum environmentAccessType) {
        this.environmentAccessType = environmentAccessType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentId")
    public String environmentId;
    public EnvironmentAccessModel withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EnvironmentAccessModel withName(String name) {
        this.name = name;
        return this;
    }
}