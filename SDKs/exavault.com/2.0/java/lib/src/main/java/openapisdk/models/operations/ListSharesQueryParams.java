package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSharesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public ListSharesQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListSharesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=message")
    public String message;
    public ListSharesQueryParams withMessage(String message) {
        this.message = message;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public ListSharesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListSharesQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient")
    public String recipient;
    public ListSharesQueryParams withRecipient(String recipient) {
        this.recipient = recipient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scope")
    public ListSharesScopeEnum scope;
    public ListSharesQueryParams withScope(ListSharesScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ListSharesQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ListSharesSortEnum sort;
    public ListSharesQueryParams withSort(ListSharesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public ListSharesTypeEnum type;
    public ListSharesQueryParams withType(ListSharesTypeEnum type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public ListSharesQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}