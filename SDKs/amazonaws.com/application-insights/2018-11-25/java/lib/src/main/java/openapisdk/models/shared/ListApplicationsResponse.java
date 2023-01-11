package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApplicationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationInfoList")
    public ApplicationInfo[] applicationInfoList;
    public ListApplicationsResponse withApplicationInfoList(ApplicationInfo[] applicationInfoList) {
        this.applicationInfoList = applicationInfoList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListApplicationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}