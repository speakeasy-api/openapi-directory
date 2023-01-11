package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserStackAssociationError
 * Describes the error that is returned when a user can’t be associated with or disassociated from a stack. 
**/
public class UserStackAssociationError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public UserStackAssociationErrorCodeEnum errorCode;
    public UserStackAssociationError withErrorCode(UserStackAssociationErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public UserStackAssociationError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserStackAssociation")
    public UserStackAssociation userStackAssociation;
    public UserStackAssociationError withUserStackAssociation(UserStackAssociation userStackAssociation) {
        this.userStackAssociation = userStackAssociation;
        return this;
    }
}