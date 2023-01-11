package openapisdk.models.shared;



/**
 * GetAccountAuthorizationDetailsResponse
 * Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request. 
**/
public class GetAccountAuthorizationDetailsResponse {
    public GroupDetail[] groupDetailList;
    public GetAccountAuthorizationDetailsResponse withGroupDetailList(GroupDetail[] groupDetailList) {
        this.groupDetailList = groupDetailList;
        return this;
    }
    public Boolean isTruncated;
    public GetAccountAuthorizationDetailsResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public GetAccountAuthorizationDetailsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ManagedPolicyDetail[] policies;
    public GetAccountAuthorizationDetailsResponse withPolicies(ManagedPolicyDetail[] policies) {
        this.policies = policies;
        return this;
    }
    public RoleDetail[] roleDetailList;
    public GetAccountAuthorizationDetailsResponse withRoleDetailList(RoleDetail[] roleDetailList) {
        this.roleDetailList = roleDetailList;
        return this;
    }
    public UserDetail[] userDetailList;
    public GetAccountAuthorizationDetailsResponse withUserDetailList(UserDetail[] userDetailList) {
        this.userDetailList = userDetailList;
        return this;
    }
}