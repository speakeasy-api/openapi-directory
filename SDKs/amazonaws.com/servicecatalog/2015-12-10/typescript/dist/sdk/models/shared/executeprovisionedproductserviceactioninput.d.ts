import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExecuteProvisionedProductServiceActionInput extends SpeakeasyBase {
    acceptLanguage?: string;
    executeToken: string;
    parameters?: Record<string, string[]>;
    provisionedProductId: string;
    serviceActionId: string;
}
