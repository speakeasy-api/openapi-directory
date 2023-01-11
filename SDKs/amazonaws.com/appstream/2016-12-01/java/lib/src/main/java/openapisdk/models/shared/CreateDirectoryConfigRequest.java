package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDirectoryConfigRequest {
    @JsonProperty("DirectoryName")
    public String directoryName;
    public CreateDirectoryConfigRequest withDirectoryName(String directoryName) {
        this.directoryName = directoryName;
        return this;
    }
    @JsonProperty("OrganizationalUnitDistinguishedNames")
    public String[] organizationalUnitDistinguishedNames;
    public CreateDirectoryConfigRequest withOrganizationalUnitDistinguishedNames(String[] organizationalUnitDistinguishedNames) {
        this.organizationalUnitDistinguishedNames = organizationalUnitDistinguishedNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceAccountCredentials")
    public ServiceAccountCredentials serviceAccountCredentials;
    public CreateDirectoryConfigRequest withServiceAccountCredentials(ServiceAccountCredentials serviceAccountCredentials) {
        this.serviceAccountCredentials = serviceAccountCredentials;
        return this;
    }
}