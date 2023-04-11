import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteAccessKeyActionEnum {
    DeleteAccessKey = "DeleteAccessKey"
}
export declare enum GETDeleteAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETDeleteAccessKeyRequest extends SpeakeasyBase {
    /**
     * <p>The access key ID for the access key ID and secret access key you want to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
     */
    accessKeyId: string;
    action: GETDeleteAccessKeyActionEnum;
    /**
     * <p>The name of the user whose access key pair you want to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    userName?: string;
    version: GETDeleteAccessKeyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteAccessKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
