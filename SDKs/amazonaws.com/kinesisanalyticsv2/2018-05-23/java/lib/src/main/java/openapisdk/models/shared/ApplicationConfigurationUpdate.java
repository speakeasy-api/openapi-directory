package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationConfigurationUpdate
 * Describes updates to an application's configuration.
**/
public class ApplicationConfigurationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationCodeConfigurationUpdate")
    public ApplicationCodeConfigurationUpdate applicationCodeConfigurationUpdate;
    public ApplicationConfigurationUpdate withApplicationCodeConfigurationUpdate(ApplicationCodeConfigurationUpdate applicationCodeConfigurationUpdate) {
        this.applicationCodeConfigurationUpdate = applicationCodeConfigurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationSnapshotConfigurationUpdate")
    public ApplicationSnapshotConfigurationUpdate applicationSnapshotConfigurationUpdate;
    public ApplicationConfigurationUpdate withApplicationSnapshotConfigurationUpdate(ApplicationSnapshotConfigurationUpdate applicationSnapshotConfigurationUpdate) {
        this.applicationSnapshotConfigurationUpdate = applicationSnapshotConfigurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnvironmentPropertyUpdates")
    public EnvironmentPropertyUpdates environmentPropertyUpdates;
    public ApplicationConfigurationUpdate withEnvironmentPropertyUpdates(EnvironmentPropertyUpdates environmentPropertyUpdates) {
        this.environmentPropertyUpdates = environmentPropertyUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FlinkApplicationConfigurationUpdate")
    public FlinkApplicationConfigurationUpdate flinkApplicationConfigurationUpdate;
    public ApplicationConfigurationUpdate withFlinkApplicationConfigurationUpdate(FlinkApplicationConfigurationUpdate flinkApplicationConfigurationUpdate) {
        this.flinkApplicationConfigurationUpdate = flinkApplicationConfigurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SqlApplicationConfigurationUpdate")
    public SqlApplicationConfigurationUpdate sqlApplicationConfigurationUpdate;
    public ApplicationConfigurationUpdate withSqlApplicationConfigurationUpdate(SqlApplicationConfigurationUpdate sqlApplicationConfigurationUpdate) {
        this.sqlApplicationConfigurationUpdate = sqlApplicationConfigurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfigurationUpdates")
    public VpcConfigurationUpdate[] vpcConfigurationUpdates;
    public ApplicationConfigurationUpdate withVpcConfigurationUpdates(VpcConfigurationUpdate[] vpcConfigurationUpdates) {
        this.vpcConfigurationUpdates = vpcConfigurationUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ZeppelinApplicationConfigurationUpdate")
    public ZeppelinApplicationConfigurationUpdate zeppelinApplicationConfigurationUpdate;
    public ApplicationConfigurationUpdate withZeppelinApplicationConfigurationUpdate(ZeppelinApplicationConfigurationUpdate zeppelinApplicationConfigurationUpdate) {
        this.zeppelinApplicationConfigurationUpdate = zeppelinApplicationConfigurationUpdate;
        return this;
    }
}