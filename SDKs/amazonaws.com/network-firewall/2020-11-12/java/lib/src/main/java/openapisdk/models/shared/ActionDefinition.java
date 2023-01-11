package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionDefinition
 * A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>.
**/
public class ActionDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublishMetricAction")
    public PublishMetricAction publishMetricAction;
    public ActionDefinition withPublishMetricAction(PublishMetricAction publishMetricAction) {
        this.publishMetricAction = publishMetricAction;
        return this;
    }
}