import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    ids?: string;
    perPage?: number;
    qAdmin?: string;
    qAllowedIps?: string;
    qEmail?: string;
    qNotes?: string;
    qPasswordValidityDays?: string;
    qSslRequired?: string;
    qUsername?: string;
    search?: string;
    sortBy?: Record<string, any>;
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userEntities?: shared.UserEntity[];
}
