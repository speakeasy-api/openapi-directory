import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDatabaseXAmzTargetEnum {
    AmazonAthenaGetDatabase = "AmazonAthena.GetDatabase"
}
export declare class GetDatabaseRequest extends SpeakeasyBase {
    getDatabaseInput: shared.GetDatabaseInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDatabaseXAmzTargetEnum;
}
export declare class GetDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDatabaseOutput?: shared.GetDatabaseOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * MetadataException
     */
    metadataException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
