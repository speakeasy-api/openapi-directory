import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListOutsideCollaboratorsPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsListOutsideCollaboratorsQueryParams extends SpeakeasyBase {
    filter?: shared.OrgEnum2;
    page?: number;
    perPage?: number;
}
export declare class OrgsListOutsideCollaboratorsRequest extends SpeakeasyBase {
    pathParams: OrgsListOutsideCollaboratorsPathParams;
    queryParams: OrgsListOutsideCollaboratorsQueryParams;
}
export declare class OrgsListOutsideCollaboratorsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
}
