package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EdiPartyName
 * Describes an Electronic Data Interchange (EDI) entity as described in as defined in <a href="https://tools.ietf.org/html/rfc5280">Subject Alternative Name</a> in RFC 5280.
**/
public class EdiPartyName {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NameAssigner")
    public String nameAssigner;
    public EdiPartyName withNameAssigner(String nameAssigner) {
        this.nameAssigner = nameAssigner;
        return this;
    }
    @JsonProperty("PartyName")
    public String partyName;
    public EdiPartyName withPartyName(String partyName) {
        this.partyName = partyName;
        return this;
    }
}