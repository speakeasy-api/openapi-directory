package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListVaultsOutput
 * Contains the Amazon S3 Glacier response to your request.
**/
public class ListVaultsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public ListVaultsOutput withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VaultList")
    public DescribeVaultOutput[] vaultList;
    public ListVaultsOutput withVaultList(DescribeVaultOutput[] vaultList) {
        this.vaultList = vaultList;
        return this;
    }
}