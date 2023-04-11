import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLocationsXAmzTargetEnum {
    OvertureServiceDescribeLocations = "OvertureService.DescribeLocations"
}
export declare class DescribeLocationsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationsXAmzTargetEnum;
}
export declare class DescribeLocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    /**
     * Success
     */
    locations?: shared.Locations;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
