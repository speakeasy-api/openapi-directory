package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeProjectResult
 *  Result structure used for requests of project details. 
**/
public class DescribeProjectResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public ProjectDetails details;
    public DescribeProjectResult withDetails(ProjectDetails details) {
        this.details = details;
        return this;
    }
}