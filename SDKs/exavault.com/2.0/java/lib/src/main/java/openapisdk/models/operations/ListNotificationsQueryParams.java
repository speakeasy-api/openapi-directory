package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNotificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public ListNotificationsActionEnum action;
    public ListNotificationsQueryParams withAction(ListNotificationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public ListNotificationsIncludeEnum include;
    public ListNotificationsQueryParams withInclude(ListNotificationsIncludeEnum include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public ListNotificationsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public ListNotificationsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public ListNotificationsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public ListNotificationsTypeEnum type;
    public ListNotificationsQueryParams withType(ListNotificationsTypeEnum type) {
        this.type = type;
        return this;
    }
}