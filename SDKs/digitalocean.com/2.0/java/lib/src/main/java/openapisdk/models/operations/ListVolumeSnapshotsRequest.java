package openapisdk.models.operations;



public class ListVolumeSnapshotsRequest {
    public ListVolumeSnapshotsPathParams pathParams;
    public ListVolumeSnapshotsRequest withPathParams(ListVolumeSnapshotsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListVolumeSnapshotsQueryParams queryParams;
    public ListVolumeSnapshotsRequest withQueryParams(ListVolumeSnapshotsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}