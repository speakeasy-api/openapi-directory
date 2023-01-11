import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSshKeysListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    userId?: string;
}
export declare class GetSshKeysListHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetSshKeysListRequest extends SpeakeasyBase {
    queryParams: GetSshKeysListQueryParams;
    headers: GetSshKeysListHeaders;
}
export declare class GetSshKeysListResponse extends SpeakeasyBase {
    contentType: string;
    sshKeyCollectionResponse?: shared.SshKeyCollectionResponse;
    statusCode: number;
}
