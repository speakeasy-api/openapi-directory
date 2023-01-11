package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasetAction
 * A <code>DatasetAction</code> object that specifies how dataset contents are automatically created.
**/
public class DatasetAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionName")
    public String actionName;
    public DatasetAction withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerAction")
    public ContainerDatasetAction containerAction;
    public DatasetAction withContainerAction(ContainerDatasetAction containerAction) {
        this.containerAction = containerAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryAction")
    public SqlQueryDatasetAction queryAction;
    public DatasetAction withQueryAction(SqlQueryDatasetAction queryAction) {
        this.queryAction = queryAction;
        return this;
    }
}