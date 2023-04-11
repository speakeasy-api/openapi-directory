import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteUserActionEnum {
    DeleteUser = "DeleteUser"
}
export declare enum GETDeleteUserVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDeleteUserRequest extends SpeakeasyBase {
    action: GETDeleteUserActionEnum;
    /**
     * The ID of the user.
     */
    userId: string;
    version: GETDeleteUserVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
