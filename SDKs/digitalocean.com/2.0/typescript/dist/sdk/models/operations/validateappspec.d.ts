import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidateAppSpecRequestBody extends SpeakeasyBase {
    appId?: string;
    spec: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
}
export declare class ValidateAppSpec200ApplicationJson extends SpeakeasyBase {
    appCost?: number;
    appIsStatic?: boolean;
    appNameAvailable?: boolean;
    appNameSuggestion?: string;
    appTierDowngradeCost?: number;
    existingStaticApps?: string;
    spec?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
}
export declare class ValidateAppSpec401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ValidateAppSpecRequest extends SpeakeasyBase {
    request: ValidateAppSpecRequestBody;
}
export declare class ValidateAppSpecResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    validateAppSpec200ApplicationJSONObject?: ValidateAppSpec200ApplicationJson;
    validateAppSpec401ApplicationJSONObject?: ValidateAppSpec401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
