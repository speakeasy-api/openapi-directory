import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The strategy to use when there is a name conflict between the imported resource and an existing resource. When the merge strategy is <code>FailOnConflict</code> existing resources are not overwritten and the import fails.
 */
export declare enum StartImportRequestBodyMergeStrategyEnum {
    Overwrite = "Overwrite",
    FailOnConflict = "FailOnConflict",
    Append = "Append"
}
/**
 * Provides information about the bot or bot locale that you want to import. You can specify the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
 */
export declare class StartImportRequestBodyResourceSpecification extends SpeakeasyBase {
    botImportSpecification?: shared.BotImportSpecification;
    botLocaleImportSpecification?: shared.BotLocaleImportSpecification;
    /**
     * Provides the parameters required for importing a custom vocabulary.
     */
    customVocabularyImportSpecification?: shared.CustomVocabularyImportSpecification;
}
export declare class StartImportRequestBody extends SpeakeasyBase {
    /**
     * The password used to encrypt the zip archive that contains the resource definition. You should always encrypt the zip archive to protect it during transit between your site and Amazon Lex.
     */
    filePassword?: string;
    /**
     * The unique identifier for the import. It is included in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateUploadUrl.html">CreateUploadUrl</a> operation.
     */
    importId: string;
    /**
     * The strategy to use when there is a name conflict between the imported resource and an existing resource. When the merge strategy is <code>FailOnConflict</code> existing resources are not overwritten and the import fails.
     */
    mergeStrategy: StartImportRequestBodyMergeStrategyEnum;
    /**
     * Provides information about the bot or bot locale that you want to import. You can specify the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
     */
    resourceSpecification: StartImportRequestBodyResourceSpecification;
}
export declare class StartImportRequest extends SpeakeasyBase {
    requestBody: StartImportRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartImportResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startImportResponse?: shared.StartImportResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
