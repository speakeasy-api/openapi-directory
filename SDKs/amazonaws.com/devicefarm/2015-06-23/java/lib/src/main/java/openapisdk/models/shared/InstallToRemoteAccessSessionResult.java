package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstallToRemoteAccessSessionResult
 * Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.
**/
public class InstallToRemoteAccessSessionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appUpload")
    public Upload appUpload;
    public InstallToRemoteAccessSessionResult withAppUpload(Upload appUpload) {
        this.appUpload = appUpload;
        return this;
    }
}