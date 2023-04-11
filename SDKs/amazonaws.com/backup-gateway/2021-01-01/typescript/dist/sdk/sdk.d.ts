import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://backup-gateway.{region}.amazonaws.com", "https://backup-gateway.{region}.amazonaws.com", "http://backup-gateway.{region}.amazonaws.com.cn", "https://backup-gateway.{region}.amazonaws.com.cn"];
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
 * <p><fullname>Backup gateway</fullname> <p>Backup gateway connects Backup to your hypervisor, so you can create, store, and restore backups of your virtual machines (VMs) anywhere, whether on-premises or in the VMware Cloud (VMC) on Amazon Web Services.</p> <p>Add on-premises resources by connecting to a hypervisor through a gateway. Backup will automatically discover the resources in your hypervisor.</p> <p>Use Backup to assign virtual or on-premises resources to a backup plan, or run on-demand backups. Once you have backed up your resources, you can view them and restore them like any resource supported by Backup.</p> <p>To download the Amazon Web Services software to get started, navigate to the Backup console, choose <b>Gateways</b>, then choose <b>Create gateway</b>.</p></p>
 *
 * @see {@link https://docs.aws.amazon.com/backup-gateway/} - Amazon Web Services documentation
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
     * Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.
     */
    associateGatewayToServer(req: operations.AssociateGatewayToServerRequest, config?: AxiosRequestConfig): Promise<operations.AssociateGatewayToServerResponse>;
    /**
     * Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.
     */
    createGateway(req: operations.CreateGatewayRequest, config?: AxiosRequestConfig): Promise<operations.CreateGatewayResponse>;
    /**
     * Deletes a backup gateway.
     */
    deleteGateway(req: operations.DeleteGatewayRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGatewayResponse>;
    /**
     * Deletes a hypervisor.
     */
    deleteHypervisor(req: operations.DeleteHypervisorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHypervisorResponse>;
    /**
     * Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.
     */
    disassociateGatewayFromServer(req: operations.DisassociateGatewayFromServerRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateGatewayFromServerResponse>;
    /**
     * Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.
     */
    getBandwidthRateLimitSchedule(req: operations.GetBandwidthRateLimitScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetBandwidthRateLimitScheduleResponse>;
    /**
     * By providing the ARN (Amazon Resource Name), this API returns the gateway.
     */
    getGateway(req: operations.GetGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GetGatewayResponse>;
    /**
     * This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
     */
    getHypervisor(req: operations.GetHypervisorRequest, config?: AxiosRequestConfig): Promise<operations.GetHypervisorResponse>;
    /**
     * This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
     */
    getHypervisorPropertyMappings(req: operations.GetHypervisorPropertyMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetHypervisorPropertyMappingsResponse>;
    /**
     * By providing the ARN (Amazon Resource Name), this API returns the virtual machine.
     */
    getVirtualMachine(req: operations.GetVirtualMachineRequest, config?: AxiosRequestConfig): Promise<operations.GetVirtualMachineResponse>;
    /**
     * Connect to a hypervisor by importing its configuration.
     */
    importHypervisorConfiguration(req: operations.ImportHypervisorConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.ImportHypervisorConfigurationResponse>;
    /**
     * Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).
     */
    listGateways(req: operations.ListGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.ListGatewaysResponse>;
    /**
     * Lists your hypervisors.
     */
    listHypervisors(req: operations.ListHypervisorsRequest, config?: AxiosRequestConfig): Promise<operations.ListHypervisorsResponse>;
    /**
     * Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists your virtual machines.
     */
    listVirtualMachines(req: operations.ListVirtualMachinesRequest, config?: AxiosRequestConfig): Promise<operations.ListVirtualMachinesResponse>;
    /**
     * This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.
     */
    putBandwidthRateLimitSchedule(req: operations.PutBandwidthRateLimitScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PutBandwidthRateLimitScheduleResponse>;
    /**
     * This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
     */
    putHypervisorPropertyMappings(req: operations.PutHypervisorPropertyMappingsRequest, config?: AxiosRequestConfig): Promise<operations.PutHypervisorPropertyMappingsResponse>;
    /**
     * Set the maintenance start time for a gateway.
     */
    putMaintenanceStartTime(req: operations.PutMaintenanceStartTimeRequest, config?: AxiosRequestConfig): Promise<operations.PutMaintenanceStartTimeResponse>;
    /**
     * This action sends a request to sync metadata across the specified virtual machines.
     */
    startVirtualMachinesMetadataSync(req: operations.StartVirtualMachinesMetadataSyncRequest, config?: AxiosRequestConfig): Promise<operations.StartVirtualMachinesMetadataSyncResponse>;
    /**
     * Tag the resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.
     */
    testHypervisorConfiguration(req: operations.TestHypervisorConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.TestHypervisorConfigurationResponse>;
    /**
     * Removes tags from the resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.
     */
    updateGatewayInformation(req: operations.UpdateGatewayInformationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGatewayInformationResponse>;
    /**
     * <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>
     */
    updateGatewaySoftwareNow(req: operations.UpdateGatewaySoftwareNowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGatewaySoftwareNowResponse>;
    /**
     * Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.
     */
    updateHypervisor(req: operations.UpdateHypervisorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateHypervisorResponse>;
}
