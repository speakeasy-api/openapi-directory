import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteVirtualMFADeviceActionEnum {
    DeleteVirtualMFADevice = "DeleteVirtualMFADevice"
}
export declare enum GETDeleteVirtualMFADeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETDeleteVirtualMFADeviceRequest extends SpeakeasyBase {
    action: GETDeleteVirtualMFADeviceActionEnum;
    /**
     * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the same as the ARN.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-</p>
     */
    serialNumber: string;
    version: GETDeleteVirtualMFADeviceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteVirtualMFADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
