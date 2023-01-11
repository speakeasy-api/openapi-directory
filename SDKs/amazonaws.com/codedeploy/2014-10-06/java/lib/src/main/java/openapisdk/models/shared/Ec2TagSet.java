package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ec2TagSet
 * Information about groups of EC2 instance tags.
**/
public class Ec2TagSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2TagSetList")
    public Ec2TagFilter[][] ec2TagSetList;
    public Ec2TagSet withEc2TagSetList(Ec2TagFilter[][] ec2TagSetList) {
        this.ec2TagSetList = ec2TagSetList;
        return this;
    }
}