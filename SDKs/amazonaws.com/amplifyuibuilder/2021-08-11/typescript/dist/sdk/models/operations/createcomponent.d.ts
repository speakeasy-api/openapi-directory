import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Represents all of the information that is required to create a component.
 */
export declare class CreateComponentRequestBodyComponentToCreate extends SpeakeasyBase {
    bindingProperties?: Record<string, shared.ComponentBindingPropertiesValue>;
    children?: shared.ComponentChild[];
    collectionProperties?: Record<string, shared.ComponentDataConfiguration>;
    componentType?: string;
    events?: Record<string, shared.ComponentEvent>;
    name?: string;
    overrides?: Record<string, Record<string, string>>;
    /**
     * Describes the component's properties.
     */
    properties?: any;
    schemaVersion?: string;
    sourceId?: string;
    tags?: Record<string, string>;
    variants?: shared.ComponentVariant[];
}
export declare class CreateComponentRequestBody extends SpeakeasyBase {
    /**
     * Represents all of the information that is required to create a component.
     */
    componentToCreate: CreateComponentRequestBodyComponentToCreate;
}
export declare class CreateComponentRequest extends SpeakeasyBase {
    requestBody: CreateComponentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID of the Amplify app to associate with the component.
     */
    appId: string;
    /**
     * The unique client token.
     */
    clientToken?: string;
    /**
     * The name of the backend environment that is a part of the Amplify app.
     */
    environmentName: string;
}
export declare class CreateComponentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createComponentResponse?: shared.CreateComponentResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
