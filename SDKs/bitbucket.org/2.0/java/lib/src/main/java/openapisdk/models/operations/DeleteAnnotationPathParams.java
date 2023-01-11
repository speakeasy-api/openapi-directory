package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAnnotationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=annotationId")
    public String annotationId;
    public DeleteAnnotationPathParams withAnnotationId(String annotationId) {
        this.annotationId = annotationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commit")
    public String commit;
    public DeleteAnnotationPathParams withCommit(String commit) {
        this.commit = commit;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteAnnotationPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportId")
    public String reportId;
    public DeleteAnnotationPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteAnnotationPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}