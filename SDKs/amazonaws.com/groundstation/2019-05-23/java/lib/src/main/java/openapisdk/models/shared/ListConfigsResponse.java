package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListConfigsResponse
 * <p/>
**/
public class ListConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configList")
    public ConfigListItem[] configList;
    public ListConfigsResponse withConfigList(ConfigListItem[] configList) {
        this.configList = configList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListConfigsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}