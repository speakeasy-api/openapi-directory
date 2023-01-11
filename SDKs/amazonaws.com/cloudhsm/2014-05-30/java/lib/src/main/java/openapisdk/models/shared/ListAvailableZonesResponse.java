package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAvailableZonesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AZList")
    public String[] azList;
    public ListAvailableZonesResponse withAzList(String[] azList) {
        this.azList = azList;
        return this;
    }
}