import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * InApp Template Request.
 */
export declare class CreateInAppTemplateRequestBodyInAppTemplateRequest extends SpeakeasyBase {
    content?: shared.InAppMessageContent[];
    customConfig?: Record<string, string>;
    layout?: shared.LayoutEnum;
    templateDescription?: string;
    tags?: Record<string, string>;
}
export declare class CreateInAppTemplateRequestBody extends SpeakeasyBase {
    /**
     * InApp Template Request.
     */
    inAppTemplateRequest: CreateInAppTemplateRequestBodyInAppTemplateRequest;
}
export declare class CreateInAppTemplateRequest extends SpeakeasyBase {
    requestBody: CreateInAppTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
     */
    templateName: string;
}
export declare class CreateInAppTemplateResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createInAppTemplateResponse?: shared.CreateInAppTemplateResponse;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * MethodNotAllowedException
     */
    methodNotAllowedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
