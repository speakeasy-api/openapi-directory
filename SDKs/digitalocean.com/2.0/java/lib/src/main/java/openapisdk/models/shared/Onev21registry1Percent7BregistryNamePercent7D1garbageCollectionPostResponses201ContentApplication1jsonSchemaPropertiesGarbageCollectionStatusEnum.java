package openapisdk.models.shared;


public enum Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum {
    REQUESTED("requested"),
    WAITING_FOR_WRITE_JW_TS_TO_EXPIRE("waiting for write JWTs to expire"),
    SCANNING_MANIFESTS("scanning manifests"),
    DELETING_UNREFERENCED_BLOBS("deleting unreferenced blobs"),
    CANCELLING("cancelling"),
    FAILED("failed"),
    SUCCEEDED("succeeded"),
    CANCELLED("cancelled");

    public final String value;

    private Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum(String value) {
        this.value = value;
    }
}
