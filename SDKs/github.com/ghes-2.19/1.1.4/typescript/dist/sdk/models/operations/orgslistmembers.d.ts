import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListMembersPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsListMembersQueryParams extends SpeakeasyBase {
    filter?: shared.OrgEnum2;
    page?: number;
    perPage?: number;
    role?: shared.OrgEnum3;
}
export declare class OrgsListMembersRequest extends SpeakeasyBase {
    pathParams: OrgsListMembersPathParams;
    queryParams: OrgsListMembersQueryParams;
}
export declare class OrgsListMembersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
    validationError?: shared.ValidationError;
}
