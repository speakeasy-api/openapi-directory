package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * UserCipherUseEntity
 * List User Cipher Uses
**/
public class UserCipherUseEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public UserCipherUseEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public UserCipherUseEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface")
    public UserCipherUseEntityInterfaceEnum interface_;
    public UserCipherUseEntity withInterface(UserCipherUseEntityInterfaceEnum interface_) {
        this.interface_ = interface_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol_cipher")
    public String protocolCipher;
    public UserCipherUseEntity withProtocolCipher(String protocolCipher) {
        this.protocolCipher = protocolCipher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public UserCipherUseEntity withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Integer userId;
    public UserCipherUseEntity withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}