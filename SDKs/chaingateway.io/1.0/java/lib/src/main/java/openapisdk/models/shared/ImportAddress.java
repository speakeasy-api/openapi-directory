package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImportAddress {
    @JsonProperty("ethaddress")
    public String ethaddress;
    public ImportAddress withEthaddress(String ethaddress) {
        this.ethaddress = ethaddress;
        return this;
    }
    @JsonProperty("filename")
    public String filename;
    public ImportAddress withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public ImportAddress withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}