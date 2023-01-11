import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInboxUploadsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    inboxId?: number;
    inboxRegistrationId?: number;
    perPage?: number;
    sortBy?: Record<string, any>;
}
export declare class GetInboxUploadsRequest extends SpeakeasyBase {
    queryParams: GetInboxUploadsQueryParams;
}
export declare class GetInboxUploadsResponse extends SpeakeasyBase {
    contentType: string;
    inboxUploadEntities?: shared.InboxUploadEntity[];
    statusCode: number;
}
