package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeVolumesResult
 * Contains the response to a <code>DescribeVolumes</code> request.
**/
public class DescribeVolumesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Volumes")
    public Volume[] volumes;
    public DescribeVolumesResult withVolumes(Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
}