package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeRaidArraysResult
 * Contains the response to a <code>DescribeRaidArrays</code> request.
**/
public class DescribeRaidArraysResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RaidArrays")
    public RaidArray[] raidArrays;
    public DescribeRaidArraysResult withRaidArrays(RaidArray[] raidArrays) {
        this.raidArrays = raidArrays;
        return this;
    }
}