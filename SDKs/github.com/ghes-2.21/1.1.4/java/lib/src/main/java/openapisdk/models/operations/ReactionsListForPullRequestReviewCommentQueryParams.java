package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsListForPullRequestReviewCommentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content")
    public openapisdk.models.shared.CommentIdEnum content;
    public ReactionsListForPullRequestReviewCommentQueryParams withContent(openapisdk.models.shared.CommentIdEnum content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReactionsListForPullRequestReviewCommentQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReactionsListForPullRequestReviewCommentQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}