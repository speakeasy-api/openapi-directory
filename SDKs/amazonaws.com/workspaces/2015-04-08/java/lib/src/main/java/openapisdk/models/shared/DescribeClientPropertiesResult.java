package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeClientPropertiesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientPropertiesList")
    public ClientPropertiesResult[] clientPropertiesList;
    public DescribeClientPropertiesResult withClientPropertiesList(ClientPropertiesResult[] clientPropertiesList) {
        this.clientPropertiesList = clientPropertiesList;
        return this;
    }
}