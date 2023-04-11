import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETResyncMFADeviceActionEnum {
    ResyncMFADevice = "ResyncMFADevice"
}
export declare enum GETResyncMFADeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETResyncMFADeviceRequest extends SpeakeasyBase {
    action: GETResyncMFADeviceActionEnum;
    /**
     * <p>An authentication code emitted by the device.</p> <p>The format for this parameter is a sequence of six digits.</p>
     */
    authenticationCode1: string;
    /**
     * <p>A subsequent authentication code emitted by the device.</p> <p>The format for this parameter is a sequence of six digits.</p>
     */
    authenticationCode2: string;
    /**
     * <p>Serial number that uniquely identifies the MFA device.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    serialNumber: string;
    /**
     * <p>The name of the user whose MFA device you want to resynchronize.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    userName: string;
    version: GETResyncMFADeviceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETResyncMFADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
