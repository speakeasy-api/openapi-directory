package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConfigAemHealthCheckServletQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bundles.ignored")
    public String[] bundlesIgnored;
    public PostConfigAemHealthCheckServletQueryParams withBundlesIgnored(String[] bundlesIgnored) {
        this.bundlesIgnored = bundlesIgnored;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bundles.ignored@TypeHint")
    public String bundlesIgnoredAtTypeHint;
    public PostConfigAemHealthCheckServletQueryParams withBundlesIgnoredAtTypeHint(String bundlesIgnoredAtTypeHint) {
        this.bundlesIgnoredAtTypeHint = bundlesIgnoredAtTypeHint;
        return this;
    }
}