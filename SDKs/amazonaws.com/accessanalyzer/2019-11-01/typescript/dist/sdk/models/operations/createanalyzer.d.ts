import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of analyzer to create. Only ACCOUNT and ORGANIZATION analyzers are supported. You can create only one analyzer per account per Region. You can create up to 5 analyzers per organization per Region.
 */
export declare enum CreateAnalyzerRequestBodyTypeEnum {
    Account = "ACCOUNT",
    Organization = "ORGANIZATION"
}
export declare class CreateAnalyzerRequestBody extends SpeakeasyBase {
    /**
     * The name of the analyzer to create.
     */
    analyzerName: string;
    /**
     * Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule.
     */
    archiveRules?: shared.InlineArchiveRule[];
    /**
     * A client token.
     */
    clientToken?: string;
    /**
     * The tags to apply to the analyzer.
     */
    tags?: Record<string, string>;
    /**
     * The type of analyzer to create. Only ACCOUNT and ORGANIZATION analyzers are supported. You can create only one analyzer per account per Region. You can create up to 5 analyzers per organization per Region.
     */
    type: CreateAnalyzerRequestBodyTypeEnum;
}
export declare class CreateAnalyzerRequest extends SpeakeasyBase {
    requestBody: CreateAnalyzerRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAnalyzerResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createAnalyzerResponse?: shared.CreateAnalyzerResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
