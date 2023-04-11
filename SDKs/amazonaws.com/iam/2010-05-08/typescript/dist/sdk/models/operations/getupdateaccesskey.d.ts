import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateAccessKeyActionEnum {
    UpdateAccessKey = "UpdateAccessKey"
}
/**
 *  The status you want to assign to the secret access key. <code>Active</code> means that the key can be used for programmatic calls to Amazon Web Services, while <code>Inactive</code> means that the key cannot be used.
 */
export declare enum GETUpdateAccessKeyStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
export declare enum GETUpdateAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETUpdateAccessKeyRequest extends SpeakeasyBase {
    /**
     * <p>The access key ID of the secret access key you want to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
     */
    accessKeyId: string;
    action: GETUpdateAccessKeyActionEnum;
    /**
     *  The status you want to assign to the secret access key. <code>Active</code> means that the key can be used for programmatic calls to Amazon Web Services, while <code>Inactive</code> means that the key cannot be used.
     */
    status: GETUpdateAccessKeyStatusEnum;
    /**
     * <p>The name of the user whose key you want to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    userName?: string;
    version: GETUpdateAccessKeyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateAccessKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
