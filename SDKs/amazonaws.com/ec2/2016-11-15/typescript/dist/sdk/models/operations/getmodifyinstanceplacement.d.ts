import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyInstancePlacementActionEnum {
    ModifyInstancePlacement = "ModifyInstancePlacement"
}
/**
 * The affinity setting for the instance.
 */
export declare enum GETModifyInstancePlacementAffinityEnum {
    Default = "default",
    Host = "host"
}
/**
 * <p>The tenancy for the instance.</p> <note> <p>For T3 instances, you can't change the tenancy from <code>dedicated</code> to <code>host</code>, or from <code>host</code> to <code>dedicated</code>. Attempting to make one of these unsupported tenancy changes results in the <code>InvalidTenancy</code> error code.</p> </note>
 */
export declare enum GETModifyInstancePlacementTenancyEnum {
    Dedicated = "dedicated",
    Host = "host"
}
export declare enum GETModifyInstancePlacementVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyInstancePlacementRequest extends SpeakeasyBase {
    action: GETModifyInstancePlacementActionEnum;
    /**
     * The affinity setting for the instance.
     */
    affinity?: GETModifyInstancePlacementAffinityEnum;
    /**
     * The Group Id of a placement group. You must specify the Placement Group <b>Group Id</b> to launch an instance in a shared placement group.
     */
    groupId?: string;
    /**
     * <p>The name of the placement group in which to place the instance. For spread placement groups, the instance must have a tenancy of <code>default</code>. For cluster and partition placement groups, the instance must have a tenancy of <code>default</code> or <code>dedicated</code>.</p> <p>To remove an instance from a placement group, specify an empty string ("").</p>
     */
    groupName?: string;
    /**
     * The ID of the Dedicated Host with which to associate the instance.
     */
    hostId?: string;
    /**
     * The ARN of the host resource group in which to place the instance.
     */
    hostResourceGroupArn?: string;
    /**
     * The ID of the instance that you are modifying.
     */
    instanceId: string;
    /**
     * The number of the partition in which to place the instance. Valid only if the placement group strategy is set to <code>partition</code>.
     */
    partitionNumber?: number;
    /**
     * <p>The tenancy for the instance.</p> <note> <p>For T3 instances, you can't change the tenancy from <code>dedicated</code> to <code>host</code>, or from <code>host</code> to <code>dedicated</code>. Attempting to make one of these unsupported tenancy changes results in the <code>InvalidTenancy</code> error code.</p> </note>
     */
    tenancy?: GETModifyInstancePlacementTenancyEnum;
    version: GETModifyInstancePlacementVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyInstancePlacementResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
