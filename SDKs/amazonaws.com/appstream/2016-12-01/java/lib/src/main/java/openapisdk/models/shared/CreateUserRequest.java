package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUserRequest {
    @JsonProperty("AuthenticationType")
    public AuthenticationTypeEnum authenticationType;
    public CreateUserRequest withAuthenticationType(AuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstName")
    public String firstName;
    public CreateUserRequest withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastName")
    public String lastName;
    public CreateUserRequest withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageAction")
    public MessageActionEnum messageAction;
    public CreateUserRequest withMessageAction(MessageActionEnum messageAction) {
        this.messageAction = messageAction;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public CreateUserRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}