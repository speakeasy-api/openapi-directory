import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestRenderEmailTemplateRequestBody extends SpeakeasyBase {
    /**
     * An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.
     */
    templateData: string;
}
export declare class TestRenderEmailTemplateRequest extends SpeakeasyBase {
    requestBody: TestRenderEmailTemplateRequestBody;
    /**
     * The name of the template.
     */
    templateName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TestRenderEmailTemplateResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    testRenderEmailTemplateResponse?: shared.TestRenderEmailTemplateResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
