import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListSelfHostedRunnersInGroupForOrgPathParams extends SpeakeasyBase {
    org: string;
    runnerGroupId: number;
}
export declare class ActionsListSelfHostedRunnersInGroupForOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson extends SpeakeasyBase {
    runners: shared.RunnerNoLabels[];
    totalCount: number;
}
export declare class ActionsListSelfHostedRunnersInGroupForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsListSelfHostedRunnersInGroupForOrgPathParams;
    queryParams: ActionsListSelfHostedRunnersInGroupForOrgQueryParams;
}
export declare class ActionsListSelfHostedRunnersInGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    actionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject?: ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson;
}
