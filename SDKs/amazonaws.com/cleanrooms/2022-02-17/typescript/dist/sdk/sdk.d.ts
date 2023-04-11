import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://cleanrooms.{region}.amazonaws.com", "https://cleanrooms.{region}.amazonaws.com", "http://cleanrooms.{region}.amazonaws.com.cn", "https://cleanrooms.{region}.amazonaws.com.cn"];
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
 * <p>Welcome to the <i>AWS Clean Rooms API Reference</i>.</p> <p>AWS Clean Rooms is an AWS service that helps multiple parties to join their data together in a secure collaboration workspace. In the collaboration, members who can query and receive results can get insights into the collective datasets without either party getting access to the other party's raw data.</p> <p>To learn more about AWS Clean Rooms concepts, procedures, and best practices, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">AWS Clean Rooms User Guide</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/cleanrooms/} - Amazon Web Services documentation
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
     * Retrieves multiple schemas by their identifiers.
     */
    batchGetSchema(req: operations.BatchGetSchemaRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetSchemaResponse>;
    /**
     * Creates a new collaboration.
     */
    createCollaboration(req: operations.CreateCollaborationRequest, config?: AxiosRequestConfig): Promise<operations.CreateCollaborationResponse>;
    /**
     * Creates a new configured table resource.
     */
    createConfiguredTable(req: operations.CreateConfiguredTableRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfiguredTableResponse>;
    /**
     * Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.
     */
    createConfiguredTableAnalysisRule(req: operations.CreateConfiguredTableAnalysisRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfiguredTableAnalysisRuleResponse>;
    /**
     * Creates a configured table association. A configured table association links a configured table with a collaboration.
     */
    createConfiguredTableAssociation(req: operations.CreateConfiguredTableAssociationRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfiguredTableAssociationResponse>;
    /**
     * Creates a membership for a specific collaboration identifier and joins the collaboration.
     */
    createMembership(req: operations.CreateMembershipRequest, config?: AxiosRequestConfig): Promise<operations.CreateMembershipResponse>;
    /**
     * Deletes a collaboration. It can only be called by the collaboration owner.
     */
    deleteCollaboration(req: operations.DeleteCollaborationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCollaborationResponse>;
    /**
     * Deletes a configured table.
     */
    deleteConfiguredTable(req: operations.DeleteConfiguredTableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfiguredTableResponse>;
    /**
     * Deletes a configured table analysis rule.
     */
    deleteConfiguredTableAnalysisRule(req: operations.DeleteConfiguredTableAnalysisRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfiguredTableAnalysisRuleResponse>;
    /**
     * Deletes a configured table association.
     */
    deleteConfiguredTableAssociation(req: operations.DeleteConfiguredTableAssociationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfiguredTableAssociationResponse>;
    /**
     * Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.
     */
    deleteMember(req: operations.DeleteMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMemberResponse>;
    /**
     * Deletes a specified membership. All resources under a membership must be deleted.
     */
    deleteMembership(req: operations.DeleteMembershipRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMembershipResponse>;
    /**
     * Returns metadata about a collaboration.
     */
    getCollaboration(req: operations.GetCollaborationRequest, config?: AxiosRequestConfig): Promise<operations.GetCollaborationResponse>;
    /**
     * Retrieves a configured table.
     */
    getConfiguredTable(req: operations.GetConfiguredTableRequest, config?: AxiosRequestConfig): Promise<operations.GetConfiguredTableResponse>;
    /**
     * Retrieves a configured table analysis rule.
     */
    getConfiguredTableAnalysisRule(req: operations.GetConfiguredTableAnalysisRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetConfiguredTableAnalysisRuleResponse>;
    /**
     * Retrieves a configured table association.
     */
    getConfiguredTableAssociation(req: operations.GetConfiguredTableAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GetConfiguredTableAssociationResponse>;
    /**
     * Retrieves a specified membership for an identifier.
     */
    getMembership(req: operations.GetMembershipRequest, config?: AxiosRequestConfig): Promise<operations.GetMembershipResponse>;
    /**
     * Returns query processing metadata.
     */
    getProtectedQuery(req: operations.GetProtectedQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetProtectedQueryResponse>;
    /**
     * Retrieves the schema for a relation within a collaboration.
     */
    getSchema(req: operations.GetSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaResponse>;
    /**
     * Retrieves a schema analysis rule.
     */
    getSchemaAnalysisRule(req: operations.GetSchemaAnalysisRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaAnalysisRuleResponse>;
    /**
     * Lists collaborations the caller owns, is active in, or has been invited to.
     */
    listCollaborations(req: operations.ListCollaborationsRequest, config?: AxiosRequestConfig): Promise<operations.ListCollaborationsResponse>;
    /**
     * Lists configured table associations for a membership.
     */
    listConfiguredTableAssociations(req: operations.ListConfiguredTableAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListConfiguredTableAssociationsResponse>;
    /**
     * Lists configured tables.
     */
    listConfiguredTables(req: operations.ListConfiguredTablesRequest, config?: AxiosRequestConfig): Promise<operations.ListConfiguredTablesResponse>;
    /**
     * Lists all members within a collaboration.
     */
    listMembers(req: operations.ListMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListMembersResponse>;
    /**
     * Lists all memberships resources within the caller's account.
     */
    listMemberships(req: operations.ListMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.ListMembershipsResponse>;
    /**
     * Lists protected queries, sorted by the most recent query.
     */
    listProtectedQueries(req: operations.ListProtectedQueriesRequest, config?: AxiosRequestConfig): Promise<operations.ListProtectedQueriesResponse>;
    /**
     * Lists the schemas for relations within a collaboration.
     */
    listSchemas(req: operations.ListSchemasRequest, config?: AxiosRequestConfig): Promise<operations.ListSchemasResponse>;
    /**
     * Lists all of the tags that have been added to a resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Creates a protected query that is started by AWS Clean Rooms.
     */
    startProtectedQuery(req: operations.StartProtectedQueryRequest, config?: AxiosRequestConfig): Promise<operations.StartProtectedQueryResponse>;
    /**
     * Tags a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes a tag or list of tags from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates collaboration metadata and can only be called by the collaboration owner.
     */
    updateCollaboration(req: operations.UpdateCollaborationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCollaborationResponse>;
    /**
     * Updates a configured table.
     */
    updateConfiguredTable(req: operations.UpdateConfiguredTableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfiguredTableResponse>;
    /**
     * Updates a configured table analysis rule.
     */
    updateConfiguredTableAnalysisRule(req: operations.UpdateConfiguredTableAnalysisRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfiguredTableAnalysisRuleResponse>;
    /**
     * Updates a configured table association.
     */
    updateConfiguredTableAssociation(req: operations.UpdateConfiguredTableAssociationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfiguredTableAssociationResponse>;
    /**
     * Updates a membership.
     */
    updateMembership(req: operations.UpdateMembershipRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMembershipResponse>;
    /**
     * Updates the processing of a currently running query.
     */
    updateProtectedQuery(req: operations.UpdateProtectedQueryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProtectedQueryResponse>;
}
