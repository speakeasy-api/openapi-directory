import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUntagMFADeviceActionEnum {
    UntagMFADevice = "UntagMFADevice"
}
export declare enum GETUntagMFADeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETUntagMFADeviceRequest extends SpeakeasyBase {
    action: GETUntagMFADeviceActionEnum;
    /**
     * <p>The unique identifier for the IAM virtual MFA device from which you want to remove tags. For virtual MFA devices, the serial number is the same as the ARN.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    serialNumber: string;
    /**
     * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified instance profile.
     */
    tagKeys: string[];
    version: GETUntagMFADeviceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUntagMFADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
