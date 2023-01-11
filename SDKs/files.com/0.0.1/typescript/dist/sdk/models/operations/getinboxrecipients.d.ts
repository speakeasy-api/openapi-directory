import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInboxRecipientsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    inboxId: number;
    perPage?: number;
    sortBy?: Record<string, any>;
    userId?: number;
}
export declare class GetInboxRecipientsRequest extends SpeakeasyBase {
    queryParams: GetInboxRecipientsQueryParams;
}
export declare class GetInboxRecipientsResponse extends SpeakeasyBase {
    contentType: string;
    inboxRecipientEntities?: shared.InboxRecipientEntity[];
    statusCode: number;
}
