import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyDBClusterEndpointActionEnum {
    ModifyDBClusterEndpoint = "ModifyDBClusterEndpoint"
}
export declare enum GETModifyDBClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETModifyDBClusterEndpointRequest extends SpeakeasyBase {
    action: GETModifyDBClusterEndpointActionEnum;
    /**
     * The identifier of the endpoint to modify. This parameter is stored as a lowercase string.
     */
    dbClusterEndpointIdentifier: string;
    /**
     * The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.
     */
    endpointType?: string;
    /**
     * List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
     */
    excludedMembers?: string[];
    /**
     * List of DB instance identifiers that are part of the custom endpoint group.
     */
    staticMembers?: string[];
    version: GETModifyDBClusterEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyDBClusterEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
