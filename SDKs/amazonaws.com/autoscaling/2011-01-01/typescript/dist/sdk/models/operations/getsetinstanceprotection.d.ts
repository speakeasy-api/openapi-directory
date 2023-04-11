import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetInstanceProtectionActionEnum {
    SetInstanceProtection = "SetInstanceProtection"
}
export declare enum GETSetInstanceProtectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETSetInstanceProtectionRequest extends SpeakeasyBase {
    action: GETSetInstanceProtectionActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * One or more instance IDs. You can specify up to 50 instances.
     */
    instanceIds: string[];
    /**
     * Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.
     */
    protectedFromScaleIn: boolean;
    version: GETSetInstanceProtectionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetInstanceProtectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
