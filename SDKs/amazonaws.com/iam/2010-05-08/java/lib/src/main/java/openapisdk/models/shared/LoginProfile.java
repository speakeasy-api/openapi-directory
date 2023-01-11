package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * LoginProfile
 * <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
**/
public class LoginProfile {
    public OffsetDateTime createDate;
    public LoginProfile withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public Boolean passwordResetRequired;
    public LoginProfile withPasswordResetRequired(Boolean passwordResetRequired) {
        this.passwordResetRequired = passwordResetRequired;
        return this;
    }
    public String userName;
    public LoginProfile withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}