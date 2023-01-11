package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetUsersForTopicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetGetUsersForTopicQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetGetUsersForTopicQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topic_id")
    public Long topicId;
    public GetGetUsersForTopicQueryParams withTopicId(Long topicId) {
        this.topicId = topicId;
        return this;
    }
}