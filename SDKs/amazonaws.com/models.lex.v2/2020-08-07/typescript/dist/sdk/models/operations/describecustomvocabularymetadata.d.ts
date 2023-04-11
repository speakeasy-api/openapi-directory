import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeCustomVocabularyMetadataRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot that contains the custom vocabulary.
     */
    botId: string;
    /**
     * The bot version of the bot to return metadata for.
     */
    botVersion: string;
    /**
     * The locale to return the custom vocabulary information for. The locale must be <code>en_GB</code>.
     */
    localeId: string;
}
export declare class DescribeCustomVocabularyMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCustomVocabularyMetadataResponse?: shared.DescribeCustomVocabularyMetadataResponse;
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
