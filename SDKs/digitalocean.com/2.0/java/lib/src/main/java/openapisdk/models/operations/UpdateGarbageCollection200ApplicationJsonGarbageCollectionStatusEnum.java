package openapisdk.models.operations;


public enum UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum {
    REQUESTED("requested"),
    WAITING_FOR_WRITE_JW_TS_TO_EXPIRE("waiting for write JWTs to expire"),
    SCANNING_MANIFESTS("scanning manifests"),
    DELETING_UNREFERENCED_BLOBS("deleting unreferenced blobs"),
    CANCELLING("cancelling"),
    FAILED("failed"),
    SUCCEEDED("succeeded"),
    CANCELLED("cancelled");

    public final String value;

    private UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum(String value) {
        this.value = value;
    }
}
