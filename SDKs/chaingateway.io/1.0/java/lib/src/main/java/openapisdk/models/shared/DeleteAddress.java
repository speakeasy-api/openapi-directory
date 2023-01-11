package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAddress {
    @JsonProperty("deleted")
    public Boolean deleted;
    public DeleteAddress withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("ethereumaddress")
    public String ethereumaddress;
    public DeleteAddress withEthereumaddress(String ethereumaddress) {
        this.ethereumaddress = ethereumaddress;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public DeleteAddress withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}