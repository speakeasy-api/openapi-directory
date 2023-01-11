package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkCreateOrUpdateAnnotationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commit")
    public String commit;
    public BulkCreateOrUpdateAnnotationsPathParams withCommit(String commit) {
        this.commit = commit;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public BulkCreateOrUpdateAnnotationsPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportId")
    public String reportId;
    public BulkCreateOrUpdateAnnotationsPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public BulkCreateOrUpdateAnnotationsPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}