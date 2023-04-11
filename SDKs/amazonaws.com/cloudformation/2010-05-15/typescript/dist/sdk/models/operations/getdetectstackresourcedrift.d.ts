import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDetectStackResourceDriftActionEnum {
    DetectStackResourceDrift = "DetectStackResourceDrift"
}
export declare enum GETDetectStackResourceDriftVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDetectStackResourceDriftRequest extends SpeakeasyBase {
    action: GETDetectStackResourceDriftActionEnum;
    /**
     * The logical name of the resource for which to return drift information.
     */
    logicalResourceId: string;
    /**
     * The name of the stack to which the resource belongs.
     */
    stackName: string;
    version: GETDetectStackResourceDriftVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDetectStackResourceDriftResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
