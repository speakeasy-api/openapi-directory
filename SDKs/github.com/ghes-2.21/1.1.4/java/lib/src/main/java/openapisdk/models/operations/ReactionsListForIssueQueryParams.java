package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsListForIssueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content")
    public openapisdk.models.shared.IssueNumberEnum content;
    public ReactionsListForIssueQueryParams withContent(openapisdk.models.shared.IssueNumberEnum content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReactionsListForIssueQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReactionsListForIssueQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}