import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The file format of the bot or bot locale definition files.
 */
export declare enum CreateExportRequestBodyFileFormatEnum {
    LexJson = "LexJson",
    Tsv = "TSV"
}
/**
 * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
 */
export declare class CreateExportRequestBodyResourceSpecification extends SpeakeasyBase {
    botExportSpecification?: shared.BotExportSpecification;
    botLocaleExportSpecification?: shared.BotLocaleExportSpecification;
    customVocabularyExportSpecification?: shared.CustomVocabularyExportSpecification;
}
export declare class CreateExportRequestBody extends SpeakeasyBase {
    /**
     * The file format of the bot or bot locale definition files.
     */
    fileFormat: CreateExportRequestBodyFileFormatEnum;
    /**
     * An password to use to encrypt the exported archive. Using a password is optional, but you should encrypt the archive to protect the data in transit between Amazon Lex and your local computer.
     */
    filePassword?: string;
    /**
     * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
     */
    resourceSpecification: CreateExportRequestBodyResourceSpecification;
}
export declare class CreateExportRequest extends SpeakeasyBase {
    requestBody: CreateExportRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateExportResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createExportResponse?: shared.CreateExportResponse;
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
