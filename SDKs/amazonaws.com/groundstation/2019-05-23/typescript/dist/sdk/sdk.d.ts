import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://groundstation.{region}.amazonaws.com", "https://groundstation.{region}.amazonaws.com", "http://groundstation.{region}.amazonaws.com.cn", "https://groundstation.{region}.amazonaws.com.cn"];
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
 * Welcome to the AWS Ground Station API Reference. AWS Ground Station is a fully managed service that enables you to control satellite communications, downlink and process satellite data, and scale your satellite operations efficiently and cost-effectively without having to build or manage your own ground station infrastructure.
 *
 * @see {@link https://docs.aws.amazon.com/groundstation/} - Amazon Web Services documentation
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
     * Cancels a contact with a specified contact ID.
     */
    cancelContact(req: operations.CancelContactRequest, config?: AxiosRequestConfig): Promise<operations.CancelContactResponse>;
    /**
     * <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>
     */
    createConfig(req: operations.CreateConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigResponse>;
    /**
     * <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>
     */
    createDataflowEndpointGroup(req: operations.CreateDataflowEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataflowEndpointGroupResponse>;
    /**
     * Creates an Ephemeris with the specified <code>EphemerisData</code>.
     */
    createEphemeris(req: operations.CreateEphemerisRequest, config?: AxiosRequestConfig): Promise<operations.CreateEphemerisResponse>;
    /**
     * <p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
     */
    createMissionProfile(req: operations.CreateMissionProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateMissionProfileResponse>;
    /**
     * Deletes a <code>Config</code>.
     */
    deleteConfig(req: operations.DeleteConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigResponse>;
    /**
     * Deletes a dataflow endpoint group.
     */
    deleteDataflowEndpointGroup(req: operations.DeleteDataflowEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDataflowEndpointGroupResponse>;
    /**
     * Deletes an ephemeris
     */
    deleteEphemeris(req: operations.DeleteEphemerisRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEphemerisResponse>;
    /**
     * Deletes a mission profile.
     */
    deleteMissionProfile(req: operations.DeleteMissionProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMissionProfileResponse>;
    /**
     * Describes an existing contact.
     */
    describeContact(req: operations.DescribeContactRequest, config?: AxiosRequestConfig): Promise<operations.DescribeContactResponse>;
    /**
     * Describes an existing ephemeris.
     */
    describeEphemeris(req: operations.DescribeEphemerisRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEphemerisResponse>;
    /**
     * Gets the latest configuration information for a registered agent.
     */
    getAgentConfiguration(req: operations.GetAgentConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentConfigurationResponse>;
    /**
     * <p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>
     */
    getConfig(req: operations.GetConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigResponse>;
    /**
     * Returns the dataflow endpoint group.
     */
    getDataflowEndpointGroup(req: operations.GetDataflowEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDataflowEndpointGroupResponse>;
    /**
     * Returns the number of minutes used by account.
     */
    getMinuteUsage(req: operations.GetMinuteUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetMinuteUsageResponse>;
    /**
     * Returns a mission profile.
     */
    getMissionProfile(req: operations.GetMissionProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetMissionProfileResponse>;
    /**
     * Returns a satellite.
     */
    getSatellite(req: operations.GetSatelliteRequest, config?: AxiosRequestConfig): Promise<operations.GetSatelliteResponse>;
    /**
     * Returns a list of <code>Config</code> objects.
     */
    listConfigs(req: operations.ListConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListConfigsResponse>;
    /**
     * <p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>
     */
    listContacts(req: operations.ListContactsRequest, config?: AxiosRequestConfig): Promise<operations.ListContactsResponse>;
    /**
     * Returns a list of <code>DataflowEndpoint</code> groups.
     */
    listDataflowEndpointGroups(req: operations.ListDataflowEndpointGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListDataflowEndpointGroupsResponse>;
    /**
     * List existing ephemerides.
     */
    listEphemerides(req: operations.ListEphemeridesRequest, config?: AxiosRequestConfig): Promise<operations.ListEphemeridesResponse>;
    /**
     * Returns a list of ground stations.
     */
    listGroundStations(req: operations.ListGroundStationsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroundStationsResponse>;
    /**
     * Returns a list of mission profiles.
     */
    listMissionProfiles(req: operations.ListMissionProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListMissionProfilesResponse>;
    /**
     * Returns a list of satellites.
     */
    listSatellites(req: operations.ListSatellitesRequest, config?: AxiosRequestConfig): Promise<operations.ListSatellitesResponse>;
    /**
     * Returns a list of tags for a specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Registers a new agent with AWS Groundstation.
     */
    registerAgent(req: operations.RegisterAgentRequest, config?: AxiosRequestConfig): Promise<operations.RegisterAgentResponse>;
    /**
     * Reserves a contact using specified parameters.
     */
    reserveContact(req: operations.ReserveContactRequest, config?: AxiosRequestConfig): Promise<operations.ReserveContactResponse>;
    /**
     * Assigns a tag to a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Deassigns a resource tag.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Update the status of the agent.
     */
    updateAgentStatus(req: operations.UpdateAgentStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAgentStatusResponse>;
    /**
     * <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
     */
    updateConfig(req: operations.UpdateConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigResponse>;
    /**
     * Updates an existing ephemeris
     */
    updateEphemeris(req: operations.UpdateEphemerisRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEphemerisResponse>;
    /**
     * <p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>
     */
    updateMissionProfile(req: operations.UpdateMissionProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMissionProfileResponse>;
}
