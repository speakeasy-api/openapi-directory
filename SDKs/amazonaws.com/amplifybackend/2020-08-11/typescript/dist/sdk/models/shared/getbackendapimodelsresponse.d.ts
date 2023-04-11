import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current status of the request.
 */
export declare enum GetBackendAPIModelsResponseStatusEnum {
    Latest = "LATEST",
    Stale = "STALE"
}
/**
 * Success
 */
export declare class GetBackendAPIModelsResponse extends SpeakeasyBase {
    modelIntrospectionSchema?: string;
    models?: string;
    status?: GetBackendAPIModelsResponseStatusEnum;
}
