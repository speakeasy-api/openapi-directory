import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersUserIdPublicKeysRequestBody extends SpeakeasyBase {
    /**
     * Actual contents of SSH key.
     */
    publicKey: string;
    /**
     * Internal reference for key.
     */
    title: string;
}
export declare class PostUsersUserIdPublicKeysRequest extends SpeakeasyBase {
    requestBody: PostUsersUserIdPublicKeysRequestBody;
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     */
    userId: number;
}
export declare class PostUsersUserIdPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The PublicKeys object.
     */
    publicKeyEntity?: shared.PublicKeyEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
