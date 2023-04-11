import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://codestar.{region}.amazonaws.com", "https://codestar.{region}.amazonaws.com", "http://codestar.{region}.amazonaws.com.cn", "https://codestar.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <fullname>AWS CodeStar</fullname> <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the operations and data types for the AWS CodeStar API along with usage examples.</p> <p>You can use the AWS CodeStar API to work with:</p> <p>Projects and their resources, by calling the following:</p> <ul> <li> <p> <code>DeleteProject</code>, which deletes a project.</p> </li> <li> <p> <code>DescribeProject</code>, which lists the attributes of a project.</p> </li> <li> <p> <code>ListProjects</code>, which lists all projects associated with your AWS account.</p> </li> <li> <p> <code>ListResources</code>, which lists the resources associated with a project.</p> </li> <li> <p> <code>ListTagsForProject</code>, which lists the tags associated with a project.</p> </li> <li> <p> <code>TagProject</code>, which adds tags to a project.</p> </li> <li> <p> <code>UntagProject</code>, which removes tags from a project.</p> </li> <li> <p> <code>UpdateProject</code>, which updates the attributes of a project.</p> </li> </ul> <p>Teams and team members, by calling the following:</p> <ul> <li> <p> <code>AssociateTeamMember</code>, which adds an IAM user to the team for a project.</p> </li> <li> <p> <code>DisassociateTeamMember</code>, which removes an IAM user from the team for a project.</p> </li> <li> <p> <code>ListTeamMembers</code>, which lists all the IAM users in the team for a project, including their roles and attributes.</p> </li> <li> <p> <code>UpdateTeamMember</code>, which updates a team member's attributes in a project.</p> </li> </ul> <p>Users, by calling the following:</p> <ul> <li> <p> <code>CreateUserProfile</code>, which creates a user profile that contains data associated with the user across all projects.</p> </li> <li> <p> <code>DeleteUserProfile</code>, which deletes all user profile information across all projects.</p> </li> <li> <p> <code>DescribeUserProfile</code>, which describes the profile of a user.</p> </li> <li> <p> <code>ListUserProfiles</code>, which lists all user profiles.</p> </li> <li> <p> <code>UpdateUserProfile</code>, which updates the profile for a user.</p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/codestar/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Adds an IAM user to the team for an AWS CodeStar project.
     */
    associateTeamMember(req: operations.AssociateTeamMemberRequest, config?: AxiosRequestConfig): Promise<operations.AssociateTeamMemberResponse>;
    /**
     * Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.
     */
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
     */
    createUserProfile(req: operations.CreateUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserProfileResponse>;
    /**
     * Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
     */
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
     */
    deleteUserProfile(req: operations.DeleteUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserProfileResponse>;
    /**
     * Describes a project and its resources.
     */
    describeProject(req: operations.DescribeProjectRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProjectResponse>;
    /**
     * Describes a user in AWS CodeStar and the user attributes across all projects.
     */
    describeUserProfile(req: operations.DescribeUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserProfileResponse>;
    /**
     * Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.
     */
    disassociateTeamMember(req: operations.DisassociateTeamMemberRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateTeamMemberResponse>;
    /**
     * Lists all projects in AWS CodeStar associated with your AWS account.
     */
    listProjects(req: operations.ListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     * Lists resources associated with a project in AWS CodeStar.
     */
    listResources(req: operations.ListResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesResponse>;
    /**
     * Gets the tags for a project.
     */
    listTagsForProject(req: operations.ListTagsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForProjectResponse>;
    /**
     * Lists all team members associated with a project.
     */
    listTeamMembers(req: operations.ListTeamMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListTeamMembersResponse>;
    /**
     * Lists all the user profiles configured for your AWS account in AWS CodeStar.
     */
    listUserProfiles(req: operations.ListUserProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListUserProfilesResponse>;
    /**
     * Adds tags to a project.
     */
    tagProject(req: operations.TagProjectRequest, config?: AxiosRequestConfig): Promise<operations.TagProjectResponse>;
    /**
     * Removes tags from a project.
     */
    untagProject(req: operations.UntagProjectRequest, config?: AxiosRequestConfig): Promise<operations.UntagProjectResponse>;
    /**
     * Updates a project in AWS CodeStar.
     */
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
    /**
     * Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.
     */
    updateTeamMember(req: operations.UpdateTeamMemberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTeamMemberResponse>;
    /**
     * Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
     */
    updateUserProfile(req: operations.UpdateUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserProfileResponse>;
}
