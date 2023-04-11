import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AssociateEncryptionConfigRequestBody extends SpeakeasyBase {
    /**
     * The client request token you are using with the encryption configuration.
     */
    clientRequestToken?: string;
    /**
     * The configuration you are using for encryption.
     */
    encryptionConfig: shared.EncryptionConfig[];
}
export declare class AssociateEncryptionConfigRequest extends SpeakeasyBase {
    requestBody: AssociateEncryptionConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the cluster that you are associating with encryption configuration.
     */
    name: string;
}
export declare class AssociateEncryptionConfigResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateEncryptionConfigResponse?: shared.AssociateEncryptionConfigResponse;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ServerException
     */
    serverException?: any;
}
