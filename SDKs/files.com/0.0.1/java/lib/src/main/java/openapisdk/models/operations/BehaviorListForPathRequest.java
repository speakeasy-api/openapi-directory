package openapisdk.models.operations;



public class BehaviorListForPathRequest {
    public BehaviorListForPathPathParams pathParams;
    public BehaviorListForPathRequest withPathParams(BehaviorListForPathPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BehaviorListForPathQueryParams queryParams;
    public BehaviorListForPathRequest withQueryParams(BehaviorListForPathQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}