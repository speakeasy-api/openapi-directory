package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutStorageConfigurationRequestBodyMultiLayerStorage
 * Contains information about the storage destination.
**/
public class PutStorageConfigurationRequestBodyMultiLayerStorage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedS3Storage")
    public openapisdk.models.shared.CustomerManagedS3Storage customerManagedS3Storage;
    public PutStorageConfigurationRequestBodyMultiLayerStorage withCustomerManagedS3Storage(openapisdk.models.shared.CustomerManagedS3Storage customerManagedS3Storage) {
        this.customerManagedS3Storage = customerManagedS3Storage;
        return this;
    }
}