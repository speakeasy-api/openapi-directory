import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With these endpoints you can manage your Members.
 *
 * @remarks
 *
 * <a href="https://configcat.com/docs/advanced/team-collaboration" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Team Collaboration.
 */
export declare class Members {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Update Member Permissions
     *
     * @remarks
     * This endpoint adds a Member identified by the `userId` to one or more Permission Groups.
     * This endpoint can also be used to move a Member between Permission Groups within a Product.
     * Only a single Permission Group can be set per Product.
     */
    addMemberToGroup(req: operations.AddMemberToGroupRequest, config?: AxiosRequestConfig): Promise<operations.AddMemberToGroupResponse>;
    /**
     * Delete Member from Organization
     *
     * @remarks
     * This endpoint removes a Member identified by the `userId` from the
     * given Organization identified by the `organizationId` parameter.
     */
    deleteOrganizationMember(req: operations.DeleteOrganizationMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationMemberResponse>;
    /**
     * Delete Member from Product
     *
     * @remarks
     * This endpoint removes a Member identified by the `userId` from the
     * given Product identified by the `productId` parameter.
     */
    deleteProductMember(req: operations.DeleteProductMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductMemberResponse>;
    /**
     * List Organization Members
     *
     * @remarks
     * This endpoint returns the list of Members that belongs
     * to the given Organization, identified by the `organizationId` parameter.
     */
    getOrganizationMembers(req: operations.GetOrganizationMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationMembersResponse>;
    /**
     * List Product Members
     *
     * @remarks
     * This endpoint returns the list of Members that belongs
     * to the given Product, identified by the `productId` parameter.
     */
    getProductMembers(req: operations.GetProductMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetProductMembersResponse>;
    /**
     * Invite Member
     *
     * @remarks
     * This endpoint invites a Member into the given Product identified by the `productId` parameter.
     */
    inviteMember(req: operations.InviteMemberRequest, config?: AxiosRequestConfig): Promise<operations.InviteMemberResponse>;
}
