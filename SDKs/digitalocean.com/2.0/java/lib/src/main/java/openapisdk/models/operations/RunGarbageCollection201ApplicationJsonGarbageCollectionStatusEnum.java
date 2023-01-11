package openapisdk.models.operations;


public enum RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum {
    REQUESTED("requested"),
    WAITING_FOR_WRITE_JW_TS_TO_EXPIRE("waiting for write JWTs to expire"),
    SCANNING_MANIFESTS("scanning manifests"),
    DELETING_UNREFERENCED_BLOBS("deleting unreferenced blobs"),
    CANCELLING("cancelling"),
    FAILED("failed"),
    SUCCEEDED("succeeded"),
    CANCELLED("cancelled");

    public final String value;

    private RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum(String value) {
        this.value = value;
    }
}
