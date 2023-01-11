package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FileSystemConfig
 * Details about the connection between a Lambda function and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.
**/
public class FileSystemConfig {
    @JsonProperty("Arn")
    public String arn;
    public FileSystemConfig withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("LocalMountPath")
    public String localMountPath;
    public FileSystemConfig withLocalMountPath(String localMountPath) {
        this.localMountPath = localMountPath;
        return this;
    }
}