package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeAccessPolicyResponse {
    @JsonProperty("accessPolicyArn")
    public String accessPolicyArn;
    public DescribeAccessPolicyResponse withAccessPolicyArn(String accessPolicyArn) {
        this.accessPolicyArn = accessPolicyArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("accessPolicyCreationDate")
    public OffsetDateTime accessPolicyCreationDate;
    public DescribeAccessPolicyResponse withAccessPolicyCreationDate(OffsetDateTime accessPolicyCreationDate) {
        this.accessPolicyCreationDate = accessPolicyCreationDate;
        return this;
    }
    @JsonProperty("accessPolicyId")
    public String accessPolicyId;
    public DescribeAccessPolicyResponse withAccessPolicyId(String accessPolicyId) {
        this.accessPolicyId = accessPolicyId;
        return this;
    }
    @JsonProperty("accessPolicyIdentity")
    public Identity accessPolicyIdentity;
    public DescribeAccessPolicyResponse withAccessPolicyIdentity(Identity accessPolicyIdentity) {
        this.accessPolicyIdentity = accessPolicyIdentity;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("accessPolicyLastUpdateDate")
    public OffsetDateTime accessPolicyLastUpdateDate;
    public DescribeAccessPolicyResponse withAccessPolicyLastUpdateDate(OffsetDateTime accessPolicyLastUpdateDate) {
        this.accessPolicyLastUpdateDate = accessPolicyLastUpdateDate;
        return this;
    }
    @JsonProperty("accessPolicyPermission")
    public PermissionEnum accessPolicyPermission;
    public DescribeAccessPolicyResponse withAccessPolicyPermission(PermissionEnum accessPolicyPermission) {
        this.accessPolicyPermission = accessPolicyPermission;
        return this;
    }
    @JsonProperty("accessPolicyResource")
    public Resource accessPolicyResource;
    public DescribeAccessPolicyResponse withAccessPolicyResource(Resource accessPolicyResource) {
        this.accessPolicyResource = accessPolicyResource;
        return this;
    }
}