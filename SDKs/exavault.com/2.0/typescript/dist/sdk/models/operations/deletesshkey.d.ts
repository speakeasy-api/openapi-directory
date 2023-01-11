import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSshKeyPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSshKeyHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class DeleteSshKeyRequest extends SpeakeasyBase {
    pathParams: DeleteSshKeyPathParams;
    headers: DeleteSshKeyHeaders;
}
export declare class DeleteSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
