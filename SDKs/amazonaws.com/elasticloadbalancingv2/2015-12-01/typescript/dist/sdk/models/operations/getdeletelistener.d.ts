import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteListenerActionEnum {
    DeleteListener = "DeleteListener"
}
export declare enum GETDeleteListenerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDeleteListenerRequest extends SpeakeasyBase {
    action: GETDeleteListenerActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    listenerArn: string;
    version: GETDeleteListenerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteListenerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
