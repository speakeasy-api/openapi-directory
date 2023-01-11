import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExternalEventsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    perPage?: number;
    sortBy?: Record<string, any>;
}
export declare class GetExternalEventsRequest extends SpeakeasyBase {
    queryParams: GetExternalEventsQueryParams;
}
export declare class GetExternalEventsResponse extends SpeakeasyBase {
    contentType: string;
    externalEventEntities?: shared.ExternalEventEntity[];
    statusCode: number;
}
