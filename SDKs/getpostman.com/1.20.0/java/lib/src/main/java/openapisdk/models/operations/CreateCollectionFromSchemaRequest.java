package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCollectionFromSchemaRequest {
    public CreateCollectionFromSchemaPathParams pathParams;
    public CreateCollectionFromSchemaRequest withPathParams(CreateCollectionFromSchemaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateCollectionFromSchemaQueryParams queryParams;
    public CreateCollectionFromSchemaRequest withQueryParams(CreateCollectionFromSchemaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCollectionFromSchemaRequestBody request;
    public CreateCollectionFromSchemaRequest withRequest(CreateCollectionFromSchemaRequestBody request) {
        this.request = request;
        return this;
    }
}