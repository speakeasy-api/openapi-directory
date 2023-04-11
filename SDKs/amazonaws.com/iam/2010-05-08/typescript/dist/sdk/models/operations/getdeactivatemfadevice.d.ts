import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeactivateMFADeviceActionEnum {
    DeactivateMFADevice = "DeactivateMFADevice"
}
export declare enum GETDeactivateMFADeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETDeactivateMFADeviceRequest extends SpeakeasyBase {
    action: GETDeactivateMFADeviceActionEnum;
    /**
     * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-</p>
     */
    serialNumber: string;
    /**
     * <p>The name of the user whose MFA device you want to deactivate.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    userName: string;
    version: GETDeactivateMFADeviceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeactivateMFADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
