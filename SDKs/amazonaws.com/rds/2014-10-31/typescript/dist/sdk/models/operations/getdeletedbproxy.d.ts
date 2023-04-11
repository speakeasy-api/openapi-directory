import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDBProxyActionEnum {
    DeleteDBProxy = "DeleteDBProxy"
}
export declare enum GETDeleteDBProxyVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETDeleteDBProxyRequest extends SpeakeasyBase {
    action: GETDeleteDBProxyActionEnum;
    /**
     * The name of the DB proxy to delete.
     */
    dbProxyName: string;
    version: GETDeleteDBProxyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDBProxyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
