import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Updates and saves all of the information about a component, based on component ID.
 */
export declare class UpdateComponentRequestBodyUpdatedComponent extends SpeakeasyBase {
    bindingProperties?: Record<string, shared.ComponentBindingPropertiesValue>;
    children?: shared.ComponentChild[];
    collectionProperties?: Record<string, shared.ComponentDataConfiguration>;
    componentType?: string;
    events?: Record<string, shared.ComponentEvent>;
    id?: string;
    name?: string;
    overrides?: Record<string, Record<string, string>>;
    /**
     * Describes the component's properties.
     */
    properties?: any;
    schemaVersion?: string;
    sourceId?: string;
    variants?: shared.ComponentVariant[];
}
export declare class UpdateComponentRequestBody extends SpeakeasyBase {
    /**
     * Updates and saves all of the information about a component, based on component ID.
     */
    updatedComponent: UpdateComponentRequestBodyUpdatedComponent;
}
export declare class UpdateComponentRequest extends SpeakeasyBase {
    requestBody: UpdateComponentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID for the Amplify app.
     */
    appId: string;
    /**
     * The unique client token.
     */
    clientToken?: string;
    /**
     * The name of the backend environment that is part of the Amplify app.
     */
    environmentName: string;
    /**
     * The unique ID for the component.
     */
    id: string;
}
export declare class UpdateComponentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * Success
     */
    updateComponentResponse?: shared.UpdateComponentResponse;
}
