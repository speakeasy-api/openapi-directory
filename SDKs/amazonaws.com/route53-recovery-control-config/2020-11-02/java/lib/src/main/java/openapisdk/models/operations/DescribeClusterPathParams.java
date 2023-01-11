package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeClusterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ClusterArn")
    public String clusterArn;
    public DescribeClusterPathParams withClusterArn(String clusterArn) {
        this.clusterArn = clusterArn;
        return this;
    }
}