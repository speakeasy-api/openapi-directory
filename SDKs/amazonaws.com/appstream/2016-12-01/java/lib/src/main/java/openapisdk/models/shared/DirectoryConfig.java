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
 * DirectoryConfig
 * Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
**/
public class DirectoryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTime")
    public OffsetDateTime createdTime;
    public DirectoryConfig withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("DirectoryName")
    public String directoryName;
    public DirectoryConfig withDirectoryName(String directoryName) {
        this.directoryName = directoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationalUnitDistinguishedNames")
    public String[] organizationalUnitDistinguishedNames;
    public DirectoryConfig withOrganizationalUnitDistinguishedNames(String[] organizationalUnitDistinguishedNames) {
        this.organizationalUnitDistinguishedNames = organizationalUnitDistinguishedNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceAccountCredentials")
    public ServiceAccountCredentials serviceAccountCredentials;
    public DirectoryConfig withServiceAccountCredentials(ServiceAccountCredentials serviceAccountCredentials) {
        this.serviceAccountCredentials = serviceAccountCredentials;
        return this;
    }
}