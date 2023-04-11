import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPublicKeysIdRequest extends SpeakeasyBase {
    /**
     * Public Key ID.
     */
    id: number;
}
export declare class GetPublicKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The PublicKeys object.
     */
    publicKeyEntity?: shared.PublicKeyEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
