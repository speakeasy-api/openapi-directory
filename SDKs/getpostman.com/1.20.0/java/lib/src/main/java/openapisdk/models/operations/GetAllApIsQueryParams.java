package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllApIsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdBy")
    public String createdBy;
    public GetAllApIsQueryParams withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public GetAllApIsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public String direction;
    public GetAllApIsQueryParams withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isPublic")
    public String isPublic;
    public GetAllApIsQueryParams withIsPublic(String isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetAllApIsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public GetAllApIsQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetAllApIsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=summary")
    public String summary;
    public GetAllApIsQueryParams withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until")
    public String until;
    public GetAllApIsQueryParams withUntil(String until) {
        this.until = until;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedBy")
    public String updatedBy;
    public GetAllApIsQueryParams withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public GetAllApIsQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}