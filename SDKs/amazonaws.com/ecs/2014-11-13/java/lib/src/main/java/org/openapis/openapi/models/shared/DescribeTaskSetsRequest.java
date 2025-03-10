/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTaskSetsRequest {
    @JsonProperty("cluster")
    public String cluster;

    public DescribeTaskSetsRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public TaskSetFieldEnum[] include;

    public DescribeTaskSetsRequest withInclude(TaskSetFieldEnum[] include) {
        this.include = include;
        return this;
    }
    
    @JsonProperty("service")
    public String service;

    public DescribeTaskSetsRequest withService(String service) {
        this.service = service;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSets")
    public String[] taskSets;

    public DescribeTaskSetsRequest withTaskSets(String[] taskSets) {
        this.taskSets = taskSets;
        return this;
    }
    
    public DescribeTaskSetsRequest(@JsonProperty("cluster") String cluster, @JsonProperty("service") String service) {
        this.cluster = cluster;
        this.service = service;
  }
}
