package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrUpdateAnnotationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=annotationId")
    public String annotationId;
    public CreateOrUpdateAnnotationPathParams withAnnotationId(String annotationId) {
        this.annotationId = annotationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commit")
    public String commit;
    public CreateOrUpdateAnnotationPathParams withCommit(String commit) {
        this.commit = commit;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public CreateOrUpdateAnnotationPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportId")
    public String reportId;
    public CreateOrUpdateAnnotationPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public CreateOrUpdateAnnotationPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}