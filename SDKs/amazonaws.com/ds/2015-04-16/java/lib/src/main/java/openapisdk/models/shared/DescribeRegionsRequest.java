package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRegionsRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DescribeRegionsRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeRegionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegionName")
    public String regionName;
    public DescribeRegionsRequest withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}