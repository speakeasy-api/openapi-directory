package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsListForCommitCommentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content")
    public openapisdk.models.shared.CommentIdEnum content;
    public ReactionsListForCommitCommentQueryParams withContent(openapisdk.models.shared.CommentIdEnum content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReactionsListForCommitCommentQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReactionsListForCommitCommentQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}