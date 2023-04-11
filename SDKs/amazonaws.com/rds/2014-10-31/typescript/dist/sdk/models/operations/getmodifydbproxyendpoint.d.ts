import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyDBProxyEndpointActionEnum {
    ModifyDBProxyEndpoint = "ModifyDBProxyEndpoint"
}
export declare enum GETModifyDBProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETModifyDBProxyEndpointRequest extends SpeakeasyBase {
    action: GETModifyDBProxyEndpointActionEnum;
    /**
     * The name of the DB proxy sociated with the DB proxy endpoint that you want to modify.
     */
    dbProxyEndpointName: string;
    /**
     * The new identifier for the <code>DBProxyEndpoint</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
     */
    newDBProxyEndpointName?: string;
    version: GETModifyDBProxyEndpointVersionEnum;
    /**
     * The VPC security group IDs for the DB proxy endpoint. When the DB proxy endpoint uses a different VPC than the original proxy, you also specify a different set of security group IDs than for the original proxy.
     */
    vpcSecurityGroupIds?: string[];
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyDBProxyEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
