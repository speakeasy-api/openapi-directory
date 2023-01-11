package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifyHapgRequest {
    @JsonProperty("HapgArn")
    public String hapgArn;
    public ModifyHapgRequest withHapgArn(String hapgArn) {
        this.hapgArn = hapgArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Label")
    public String label;
    public ModifyHapgRequest withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartitionSerialList")
    public String[] partitionSerialList;
    public ModifyHapgRequest withPartitionSerialList(String[] partitionSerialList) {
        this.partitionSerialList = partitionSerialList;
        return this;
    }
}