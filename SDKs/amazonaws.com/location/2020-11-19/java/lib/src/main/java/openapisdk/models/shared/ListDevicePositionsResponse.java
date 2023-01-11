package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDevicePositionsResponse {
    @JsonProperty("Entries")
    public ListDevicePositionsResponseEntry[] entries;
    public ListDevicePositionsResponse withEntries(ListDevicePositionsResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDevicePositionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}