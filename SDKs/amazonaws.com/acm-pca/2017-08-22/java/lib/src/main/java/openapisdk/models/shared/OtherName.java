package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OtherName
 * Defines a custom ASN.1 X.400 <code>GeneralName</code> using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.
**/
public class OtherName {
    @JsonProperty("TypeId")
    public String typeId;
    public OtherName withTypeId(String typeId) {
        this.typeId = typeId;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public OtherName withValue(String value) {
        this.value = value;
        return this;
    }
}