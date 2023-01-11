package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListNetworkProfilesRequest {
    @JsonProperty("arn")
    public String arn;
    public ListNetworkProfilesRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListNetworkProfilesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public NetworkProfileTypeEnum type;
    public ListNetworkProfilesRequest withType(NetworkProfileTypeEnum type) {
        this.type = type;
        return this;
    }
}