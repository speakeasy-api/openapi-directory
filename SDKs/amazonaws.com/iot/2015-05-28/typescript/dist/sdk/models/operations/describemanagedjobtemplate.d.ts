import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeManagedJobTemplateRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique name of a managed job template, which is required.
     */
    templateName: string;
    /**
     * An optional parameter to specify version of a managed template. If not specified, the pre-defined default version is returned.
     */
    templateVersion?: string;
}
export declare class DescribeManagedJobTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeManagedJobTemplateResponse?: shared.DescribeManagedJobTemplateResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
