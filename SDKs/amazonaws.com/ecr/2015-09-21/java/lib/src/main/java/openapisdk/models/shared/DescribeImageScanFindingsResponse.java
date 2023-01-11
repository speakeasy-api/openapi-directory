package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeImageScanFindingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageId")
    public ImageIdentifier imageId;
    public DescribeImageScanFindingsResponse withImageId(ImageIdentifier imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageScanFindings")
    public ImageScanFindings imageScanFindings;
    public DescribeImageScanFindingsResponse withImageScanFindings(ImageScanFindings imageScanFindings) {
        this.imageScanFindings = imageScanFindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageScanStatus")
    public ImageScanStatus imageScanStatus;
    public DescribeImageScanFindingsResponse withImageScanStatus(ImageScanStatus imageScanStatus) {
        this.imageScanStatus = imageScanStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeImageScanFindingsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public DescribeImageScanFindingsResponse withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public DescribeImageScanFindingsResponse withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}