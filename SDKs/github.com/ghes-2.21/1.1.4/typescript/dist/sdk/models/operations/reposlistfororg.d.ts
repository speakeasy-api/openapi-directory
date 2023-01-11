import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ReposListForOrgQueryParams extends SpeakeasyBase {
    direction?: shared.OrgEnum6;
    page?: number;
    perPage?: number;
    sort?: shared.OrgEnum5;
    type?: shared.OrgEnum4;
}
export declare class ReposListForOrgRequest extends SpeakeasyBase {
    pathParams: ReposListForOrgPathParams;
    queryParams: ReposListForOrgQueryParams;
}
export declare class ReposListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    minimalRepositories?: shared.MinimalRepository[];
}
