package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAddonVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=addonName")
    public String addonName;
    public DescribeAddonVersionsQueryParams withAddonName(String addonName) {
        this.addonName = addonName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=kubernetesVersion")
    public String kubernetesVersion;
    public DescribeAddonVersionsQueryParams withKubernetesVersion(String kubernetesVersion) {
        this.kubernetesVersion = kubernetesVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public DescribeAddonVersionsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public DescribeAddonVersionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}