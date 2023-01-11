package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirelensConfiguration
 * The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom Log Routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
public class FirelensConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public java.util.Map<String, String> options;
    public FirelensConfiguration withOptions(java.util.Map<String, String> options) {
        this.options = options;
        return this;
    }
    @JsonProperty("type")
    public FirelensConfigurationTypeEnum type;
    public FirelensConfiguration withType(FirelensConfigurationTypeEnum type) {
        this.type = type;
        return this;
    }
}