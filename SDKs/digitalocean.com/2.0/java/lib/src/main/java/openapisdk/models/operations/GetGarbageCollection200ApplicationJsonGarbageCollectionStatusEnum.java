package openapisdk.models.operations;


public enum GetGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum {
    REQUESTED("requested"),
    WAITING_FOR_WRITE_JW_TS_TO_EXPIRE("waiting for write JWTs to expire"),
    SCANNING_MANIFESTS("scanning manifests"),
    DELETING_UNREFERENCED_BLOBS("deleting unreferenced blobs"),
    CANCELLING("cancelling"),
    FAILED("failed"),
    SUCCEEDED("succeeded"),
    CANCELLED("cancelled");

    public final String value;

    private GetGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum(String value) {
        this.value = value;
    }
}
