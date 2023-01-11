package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AccessPolicySummary
 * Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource.
**/
public class AccessPolicySummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public AccessPolicySummary withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AccessPolicySummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("identity")
    public Identity identity;
    public AccessPolicySummary withIdentity(Identity identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateDate")
    public OffsetDateTime lastUpdateDate;
    public AccessPolicySummary withLastUpdateDate(OffsetDateTime lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
        return this;
    }
    @JsonProperty("permission")
    public PermissionEnum permission;
    public AccessPolicySummary withPermission(PermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonProperty("resource")
    public Resource resource;
    public AccessPolicySummary withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
}