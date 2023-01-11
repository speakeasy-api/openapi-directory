package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateChannelRequestBodyChannelStorage
 * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
**/
public class CreateChannelRequestBodyChannelStorage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedS3")
    public openapisdk.models.shared.CustomerManagedChannelS3Storage customerManagedS3;
    public CreateChannelRequestBodyChannelStorage withCustomerManagedS3(openapisdk.models.shared.CustomerManagedChannelS3Storage customerManagedS3) {
        this.customerManagedS3 = customerManagedS3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceManagedS3")
    public java.util.Map<String, Object> serviceManagedS3;
    public CreateChannelRequestBodyChannelStorage withServiceManagedS3(java.util.Map<String, Object> serviceManagedS3) {
        this.serviceManagedS3 = serviceManagedS3;
        return this;
    }
}