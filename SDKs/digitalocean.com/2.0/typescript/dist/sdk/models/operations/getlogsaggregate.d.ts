import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLogsAggregatePathParams extends SpeakeasyBase {
    appId: string;
    deploymentId: string;
}
export declare class GetLogsAggregateQueryParams extends SpeakeasyBase {
    follow?: boolean;
    podConnectionTimeout?: string;
    type: shared.Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetParameters4Enum;
}
export declare class GetLogsAggregate401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetLogsAggregateRequest extends SpeakeasyBase {
    pathParams: GetLogsAggregatePathParams;
    queryParams: GetLogsAggregateQueryParams;
}
export declare class GetLogsAggregateResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getLogsAggregate401ApplicationJSONObject?: GetLogsAggregate401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
    onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema?: shared.Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema;
}
