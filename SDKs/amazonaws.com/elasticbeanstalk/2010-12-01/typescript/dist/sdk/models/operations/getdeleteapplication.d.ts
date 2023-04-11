import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteApplicationActionEnum {
    DeleteApplication = "DeleteApplication"
}
export declare enum GETDeleteApplicationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDeleteApplicationRequest extends SpeakeasyBase {
    action: GETDeleteApplicationActionEnum;
    /**
     * The name of the application to delete.
     */
    applicationName: string;
    /**
     * When set to true, running environments will be terminated before deleting the application.
     */
    terminateEnvByForce?: boolean;
    version: GETDeleteApplicationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteApplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
