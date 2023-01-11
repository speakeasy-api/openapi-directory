import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RevokeSubUserKeyRevokeSubUserKeyPutQueryParams extends SpeakeasyBase {
    apiID: string;
    apiKey: string;
    subUserKeyUUID: string;
}
export declare class RevokeSubUserKeyRevokeSubUserKeyPutRequest extends SpeakeasyBase {
    queryParams: RevokeSubUserKeyRevokeSubUserKeyPutQueryParams;
}
export declare class RevokeSubUserKeyRevokeSubUserKeyPutResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: shared.GenericResponse;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
