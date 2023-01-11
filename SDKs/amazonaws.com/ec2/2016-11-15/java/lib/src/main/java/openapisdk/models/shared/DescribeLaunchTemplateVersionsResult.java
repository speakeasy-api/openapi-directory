package openapisdk.models.shared;



public class DescribeLaunchTemplateVersionsResult {
    public java.util.Map<String, Object> launchTemplateVersions;
    public DescribeLaunchTemplateVersionsResult withLaunchTemplateVersions(java.util.Map<String, Object> launchTemplateVersions) {
        this.launchTemplateVersions = launchTemplateVersions;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeLaunchTemplateVersionsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}