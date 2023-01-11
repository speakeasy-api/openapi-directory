package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EngineVersion
 * The Athena engine version for running queries.
**/
public class EngineVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveEngineVersion")
    public String effectiveEngineVersion;
    public EngineVersion withEffectiveEngineVersion(String effectiveEngineVersion) {
        this.effectiveEngineVersion = effectiveEngineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectedEngineVersion")
    public String selectedEngineVersion;
    public EngineVersion withSelectedEngineVersion(String selectedEngineVersion) {
        this.selectedEngineVersion = selectedEngineVersion;
        return this;
    }
}