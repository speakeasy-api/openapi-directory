import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyTrafficMirrorFilterNetworkServicesActionEnum {
    ModifyTrafficMirrorFilterNetworkServices = "ModifyTrafficMirrorFilterNetworkServices"
}
export declare enum GETModifyTrafficMirrorFilterNetworkServicesAddNetworkServiceEnum {
    AmazonDns = "amazon-dns"
}
export declare enum GETModifyTrafficMirrorFilterNetworkServicesRemoveNetworkServiceEnum {
    AmazonDns = "amazon-dns"
}
export declare enum GETModifyTrafficMirrorFilterNetworkServicesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyTrafficMirrorFilterNetworkServicesRequest extends SpeakeasyBase {
    action: GETModifyTrafficMirrorFilterNetworkServicesActionEnum;
    /**
     * The network service, for example Amazon DNS, that you want to mirror.
     */
    addNetworkService?: GETModifyTrafficMirrorFilterNetworkServicesAddNetworkServiceEnum[];
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The network service, for example Amazon DNS, that you no longer want to mirror.
     */
    removeNetworkService?: GETModifyTrafficMirrorFilterNetworkServicesRemoveNetworkServiceEnum[];
    /**
     * The ID of the Traffic Mirror filter.
     */
    trafficMirrorFilterId: string;
    version: GETModifyTrafficMirrorFilterNetworkServicesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyTrafficMirrorFilterNetworkServicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
