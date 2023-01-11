package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProvisionedProductOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchDashboards")
    public CloudWatchDashboard[] cloudWatchDashboards;
    public DescribeProvisionedProductOutput withCloudWatchDashboards(CloudWatchDashboard[] cloudWatchDashboards) {
        this.cloudWatchDashboards = cloudWatchDashboards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedProductDetail")
    public ProvisionedProductDetail provisionedProductDetail;
    public DescribeProvisionedProductOutput withProvisionedProductDetail(ProvisionedProductDetail provisionedProductDetail) {
        this.provisionedProductDetail = provisionedProductDetail;
        return this;
    }
}