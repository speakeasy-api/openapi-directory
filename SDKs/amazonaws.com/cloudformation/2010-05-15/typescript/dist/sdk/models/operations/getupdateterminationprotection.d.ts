import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateTerminationProtectionActionEnum {
    UpdateTerminationProtection = "UpdateTerminationProtection"
}
export declare enum GETUpdateTerminationProtectionVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETUpdateTerminationProtectionRequest extends SpeakeasyBase {
    action: GETUpdateTerminationProtectionActionEnum;
    /**
     * Whether to enable termination protection on the specified stack.
     */
    enableTerminationProtection: boolean;
    /**
     * The name or unique ID of the stack for which you want to set termination protection.
     */
    stackName: string;
    version: GETUpdateTerminationProtectionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateTerminationProtectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
