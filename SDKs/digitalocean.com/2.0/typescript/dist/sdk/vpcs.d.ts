import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VpCs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createVpc - Create a New VPC
     *
     * To create a VPC, send a POST request to `/v2/vpcs` specifying the attributes
     * in the table below in the JSON body.
     *
     * **Note:** If you do not currently have a VPC network in a specific datacenter
     * region, the first one that you create will be set as the default for that
     * region. The default VPC for a region cannot be changed or deleted.
     *
    **/
    createVpc(req: operations.CreateVpcRequest, config?: AxiosRequestConfig): Promise<operations.CreateVpcResponse>;
    /**
     * deleteVpc - Delete a VPC
     *
     * To delete a VPC, send a DELETE request to `/v2/vpcs/$VPC_ID`. A 204 status
     * code with no body will be returned in response to a successful request.
     *
     * The default VPC for a region can not be deleted. Additionally, a VPC can only
     * be deleted if it does not contain any member resources. Attempting to delete
     * a region's default VPC or a VPC that still has members will result in a
     * 403 Forbidden error response.
     *
    **/
    deleteVpc(req: operations.DeleteVpcRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVpcResponse>;
    /**
     * getVpc - Retrieve an Existing VPC
     *
     * To show information about an existing VPC, send a GET request to `/v2/vpcs/$VPC_ID`.
    **/
    getVpc(req: operations.GetVpcRequest, config?: AxiosRequestConfig): Promise<operations.GetVpcResponse>;
    /**
     * listVpcMembers - List the Member Resources of a VPC
     *
     * To list all of the resources that are members of a VPC, send a GET request to
     * `/v2/vpcs/$VPC_ID/members`.
     *
     * To only list resources of a specific type that are members of the VPC,
     * included a `resource_type` query parameter. For example, to only list Droplets
     * in the VPC, send a GET request to `/v2/vpcs/$VPC_ID/members?resource_type=droplet`.
     *
    **/
    listVpcMembers(req: operations.ListVpcMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListVpcMembersResponse>;
    /**
     * listVpcs - List All VPCs
     *
     * To list all of the VPCs on your account, send a GET request to `/v2/vpcs`.
    **/
    listVpcs(req: operations.ListVpcsRequest, config?: AxiosRequestConfig): Promise<operations.ListVpcsResponse>;
    /**
     * patchVpc - Partially Update a VPC
     *
     * To update a subset of information about a VPC, send a PATCH request to
     * `/v2/vpcs/$VPC_ID`.
     *
    **/
    patchVpc(req: operations.PatchVpcRequest, config?: AxiosRequestConfig): Promise<operations.PatchVpcResponse>;
    /**
     * updateVpc - Update a VPC
     *
     * To update information about a VPC, send a PUT request to `/v2/vpcs/$VPC_ID`.
     *
    **/
    updateVpc(req: operations.UpdateVpcRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVpcResponse>;
}
