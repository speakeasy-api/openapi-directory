import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Members {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteOrganizationMember - Delete Member from Organization
     *
     * This endpoint removes a Member identified by the `userId` from the
     * given Organization identified by the `organizationId` parameter.
    **/
    deleteOrganizationMember(req: operations.DeleteOrganizationMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationMemberResponse>;
    /**
     * deleteProductMember - Delete Member from Product
     *
     * This endpoint removes a Member identified by the `userId` from the
     * given Product identified by the `productId` parameter.
    **/
    deleteProductMember(req: operations.DeleteProductMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductMemberResponse>;
    /**
     * getOrganizationMembers - List Organization Members
     *
     * This endpoint returns the list of Members that belongs
     * to the given Organization, identified by the `organizationId` parameter.
    **/
    getOrganizationMembers(req: operations.GetOrganizationMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationMembersResponse>;
    /**
     * getProductMembers - List Product Members
     *
     * This endpoint returns the list of Members that belongs
     * to the given Product, identified by the `productId` parameter.
    **/
    getProductMembers(req: operations.GetProductMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetProductMembersResponse>;
    /**
     * inviteMember - Invite Member
     *
     * This endpoint invites a Member into the given Product identified by the `productId` parameter.
    **/
    inviteMember(req: operations.InviteMemberRequest, config?: AxiosRequestConfig): Promise<operations.InviteMemberResponse>;
}
