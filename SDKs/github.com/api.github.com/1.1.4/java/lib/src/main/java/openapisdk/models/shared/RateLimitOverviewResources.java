package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RateLimitOverviewResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code_scanning_upload")
    public RateLimit codeScanningUpload;
    public RateLimitOverviewResources withCodeScanningUpload(RateLimit codeScanningUpload) {
        this.codeScanningUpload = codeScanningUpload;
        return this;
    }
    @JsonProperty("core")
    public RateLimit core;
    public RateLimitOverviewResources withCore(RateLimit core) {
        this.core = core;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("graphql")
    public RateLimit graphql;
    public RateLimitOverviewResources withGraphql(RateLimit graphql) {
        this.graphql = graphql;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integration_manifest")
    public RateLimit integrationManifest;
    public RateLimitOverviewResources withIntegrationManifest(RateLimit integrationManifest) {
        this.integrationManifest = integrationManifest;
        return this;
    }
    @JsonProperty("search")
    public RateLimit search;
    public RateLimitOverviewResources withSearch(RateLimit search) {
        this.search = search;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_import")
    public RateLimit sourceImport;
    public RateLimitOverviewResources withSourceImport(RateLimit sourceImport) {
        this.sourceImport = sourceImport;
        return this;
    }
}