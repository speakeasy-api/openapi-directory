import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchPublicKeysIdRequestBody extends SpeakeasyBase {
    /**
     * Internal reference for key.
     */
    title: string;
}
export declare class PatchPublicKeysIdRequest extends SpeakeasyBase {
    requestBody: PatchPublicKeysIdRequestBody;
    /**
     * Public Key ID.
     */
    id: number;
}
export declare class PatchPublicKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The PublicKeys object.
     */
    publicKeyEntity?: shared.PublicKeyEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
