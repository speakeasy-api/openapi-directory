package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SftpTransport
 * Describes a single SFTP connection in all of it variations
**/
public class SftpTransport {
    @JsonProperty("filePath")
    public String filePath;
    public SftpTransport withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    @JsonProperty("host")
    public String host;
    public SftpTransport withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("port")
    public Double port;
    public SftpTransport withPort(Double port) {
        this.port = port;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public SftpTransport withType(String type) {
        this.type = type;
        return this;
    }
}