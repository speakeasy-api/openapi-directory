import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRestartAppServerActionEnum {
    RestartAppServer = "RestartAppServer"
}
export declare enum POSTRestartAppServerVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTRestartAppServerRequest extends SpeakeasyBase {
    action: POSTRestartAppServerActionEnum;
    requestBody?: Uint8Array;
    version: POSTRestartAppServerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRestartAppServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
