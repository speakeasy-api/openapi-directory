import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDetectStackDriftActionEnum {
    DetectStackDrift = "DetectStackDrift"
}
export declare enum GETDetectStackDriftVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDetectStackDriftRequest extends SpeakeasyBase {
    action: GETDetectStackDriftActionEnum;
    /**
     * The logical names of any resources you want to use as filters.
     */
    logicalResourceIds?: string[];
    /**
     * The name of the stack for which you want to detect drift.
     */
    stackName: string;
    version: GETDetectStackDriftVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDetectStackDriftResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
