package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportBundleResult
 *  Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources. 
**/
public class ExportBundleResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadUrl")
    public String downloadUrl;
    public ExportBundleResult withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
}