import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFleetAdvisorDatabasesXAmzTargetEnum {
    AmazonDMSv20160101DeleteFleetAdvisorDatabases = "AmazonDMSv20160101.DeleteFleetAdvisorDatabases"
}
export declare class DeleteFleetAdvisorDatabasesRequest extends SpeakeasyBase {
    deleteFleetAdvisorDatabasesRequest: shared.DeleteFleetAdvisorDatabasesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFleetAdvisorDatabasesXAmzTargetEnum;
}
export declare class DeleteFleetAdvisorDatabasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteFleetAdvisorDatabasesResponse?: shared.DeleteFleetAdvisorDatabasesResponse;
    /**
     * InvalidOperationFault
     */
    invalidOperationFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
