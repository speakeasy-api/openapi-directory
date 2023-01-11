package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchEvidenceContentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evidence_id")
    public String evidenceId;
    public FetchEvidenceContentQueryParams withEvidenceId(String evidenceId) {
        this.evidenceId = evidenceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=file_id")
    public String fileId;
    public FetchEvidenceContentQueryParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}