package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestUrlRewritingRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_slug")
    public String projectSlug;
    public TestUrlRewritingRulesPathParams withProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public TestUrlRewritingRulesPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}