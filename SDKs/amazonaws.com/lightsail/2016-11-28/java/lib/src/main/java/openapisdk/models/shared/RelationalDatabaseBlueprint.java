package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelationalDatabaseBlueprint
 * Describes a database image, or blueprint. A blueprint describes the major engine version of a database.
**/
public class RelationalDatabaseBlueprint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blueprintId")
    public String blueprintId;
    public RelationalDatabaseBlueprint withBlueprintId(String blueprintId) {
        this.blueprintId = blueprintId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine")
    public RelationalDatabaseEngineEnum engine;
    public RelationalDatabaseBlueprint withEngine(RelationalDatabaseEngineEnum engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engineDescription")
    public String engineDescription;
    public RelationalDatabaseBlueprint withEngineDescription(String engineDescription) {
        this.engineDescription = engineDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engineVersion")
    public String engineVersion;
    public RelationalDatabaseBlueprint withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engineVersionDescription")
    public String engineVersionDescription;
    public RelationalDatabaseBlueprint withEngineVersionDescription(String engineVersionDescription) {
        this.engineVersionDescription = engineVersionDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEngineDefault")
    public Boolean isEngineDefault;
    public RelationalDatabaseBlueprint withIsEngineDefault(Boolean isEngineDefault) {
        this.isEngineDefault = isEngineDefault;
        return this;
    }
}