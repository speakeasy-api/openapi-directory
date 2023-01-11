package openapisdk.models.shared;



/**
 * SupportedOperationList
 * Describes the operations that are allowed on a maintenance track.
**/
public class SupportedOperationList {
    public String operationName;
    public SupportedOperationList withOperationName(String operationName) {
        this.operationName = operationName;
        return this;
    }
}