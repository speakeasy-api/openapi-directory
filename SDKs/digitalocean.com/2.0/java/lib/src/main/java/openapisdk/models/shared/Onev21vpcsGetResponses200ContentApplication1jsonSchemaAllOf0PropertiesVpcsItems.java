package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public Boolean default_;
    public Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems withDefault(Boolean default_) {
        this.default_ = default_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_range")
    public String ipRange;
    public Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urn")
    public String urn;
    public Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems withUrn(String urn) {
        this.urn = urn;
        return this;
    }
}