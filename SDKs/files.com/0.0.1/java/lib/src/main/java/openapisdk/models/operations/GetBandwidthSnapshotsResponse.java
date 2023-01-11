package openapisdk.models.operations;



public class GetBandwidthSnapshotsResponse {
    public openapisdk.models.shared.BandwidthSnapshotEntity[] bandwidthSnapshotEntities;
    public GetBandwidthSnapshotsResponse withBandwidthSnapshotEntities(openapisdk.models.shared.BandwidthSnapshotEntity[] bandwidthSnapshotEntities) {
        this.bandwidthSnapshotEntities = bandwidthSnapshotEntities;
        return this;
    }
    public String contentType;
    public GetBandwidthSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBandwidthSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}