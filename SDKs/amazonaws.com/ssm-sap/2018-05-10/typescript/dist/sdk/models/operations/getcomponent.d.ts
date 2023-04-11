import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetComponentRequestBody extends SpeakeasyBase {
    /**
     * The ID of the application.
     */
    applicationId: string;
    /**
     * The ID of the component.
     */
    componentId: string;
}
export declare class GetComponentRequest extends SpeakeasyBase {
    requestBody: GetComponentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetComponentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getComponentOutput?: shared.GetComponentOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
