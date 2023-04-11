import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateServiceSpecificCredentialActionEnum {
    UpdateServiceSpecificCredential = "UpdateServiceSpecificCredential"
}
/**
 * The status to be assigned to the service-specific credential.
 */
export declare enum GETUpdateServiceSpecificCredentialStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
export declare enum GETUpdateServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETUpdateServiceSpecificCredentialRequest extends SpeakeasyBase {
    action: GETUpdateServiceSpecificCredentialActionEnum;
    /**
     * <p>The unique identifier of the service-specific credential.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
     */
    serviceSpecificCredentialId: string;
    /**
     * The status to be assigned to the service-specific credential.
     */
    status: GETUpdateServiceSpecificCredentialStatusEnum;
    /**
     * <p>The name of the IAM user associated with the service-specific credential. If you do not specify this value, then the operation assumes the user whose credentials are used to call the operation.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    userName?: string;
    version: GETUpdateServiceSpecificCredentialVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateServiceSpecificCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
