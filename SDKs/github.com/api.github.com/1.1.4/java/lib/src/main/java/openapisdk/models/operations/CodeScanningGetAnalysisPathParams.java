package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CodeScanningGetAnalysisPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analysis_id")
    public Long analysisId;
    public CodeScanningGetAnalysisPathParams withAnalysisId(Long analysisId) {
        this.analysisId = analysisId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public CodeScanningGetAnalysisPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public CodeScanningGetAnalysisPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}