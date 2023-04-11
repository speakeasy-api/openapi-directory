import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResolveCaseXAmzTargetEnum {
    AWSSupport20130415ResolveCase = "AWSSupport_20130415.ResolveCase"
}
export declare class ResolveCaseRequest extends SpeakeasyBase {
    resolveCaseRequest: shared.ResolveCaseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResolveCaseXAmzTargetEnum;
}
export declare class ResolveCaseResponse extends SpeakeasyBase {
    /**
     * CaseIdNotFound
     */
    caseIdNotFound?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    resolveCaseResponse?: shared.ResolveCaseResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
