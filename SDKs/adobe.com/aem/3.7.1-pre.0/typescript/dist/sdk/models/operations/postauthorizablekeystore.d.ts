import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthorizableKeystoreRequestBodyCertChain extends SpeakeasyBase {
    certChain: string;
    content: Uint8Array;
}
export declare class PostAuthorizableKeystoreRequestBodyKeyStore extends SpeakeasyBase {
    content: Uint8Array;
    keyStore: string;
}
export declare class PostAuthorizableKeystoreRequestBodyPk extends SpeakeasyBase {
    content: Uint8Array;
    pk: string;
}
export declare class PostAuthorizableKeystoreRequestBody extends SpeakeasyBase {
    certChain?: PostAuthorizableKeystoreRequestBodyCertChain;
    keyStore?: PostAuthorizableKeystoreRequestBodyKeyStore;
    pk?: PostAuthorizableKeystoreRequestBodyPk;
}
export declare class PostAuthorizableKeystoreRequest extends SpeakeasyBase {
    operation?: string;
    requestBody?: PostAuthorizableKeystoreRequestBody;
    alias?: string;
    authorizableId: string;
    currentPassword?: string;
    intermediatePath: string;
    keyPassword?: string;
    keyStorePass?: string;
    newAlias?: string;
    newPassword?: string;
    rePassword?: string;
    removeAlias?: string;
}
export declare class PostAuthorizableKeystoreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Retrieved Authorizable Keystore info
     */
    keystoreInfo?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    postAuthorizableKeystoreDefaultTextPlainString?: string;
}
