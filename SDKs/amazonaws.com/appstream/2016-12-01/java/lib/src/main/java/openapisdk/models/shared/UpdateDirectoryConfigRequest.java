package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDirectoryConfigRequest {
    @JsonProperty("DirectoryName")
    public String directoryName;
    public UpdateDirectoryConfigRequest withDirectoryName(String directoryName) {
        this.directoryName = directoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationalUnitDistinguishedNames")
    public String[] organizationalUnitDistinguishedNames;
    public UpdateDirectoryConfigRequest withOrganizationalUnitDistinguishedNames(String[] organizationalUnitDistinguishedNames) {
        this.organizationalUnitDistinguishedNames = organizationalUnitDistinguishedNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceAccountCredentials")
    public ServiceAccountCredentials serviceAccountCredentials;
    public UpdateDirectoryConfigRequest withServiceAccountCredentials(ServiceAccountCredentials serviceAccountCredentials) {
        this.serviceAccountCredentials = serviceAccountCredentials;
        return this;
    }
}