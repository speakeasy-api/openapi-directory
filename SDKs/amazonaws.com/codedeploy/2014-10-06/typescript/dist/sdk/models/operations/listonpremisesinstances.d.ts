import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006ListOnPremisesInstances = "CodeDeploy_20141006.ListOnPremisesInstances"
}
export declare class ListOnPremisesInstancesRequest extends SpeakeasyBase {
    listOnPremisesInstancesInput: shared.ListOnPremisesInstancesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOnPremisesInstancesXAmzTargetEnum;
}
export declare class ListOnPremisesInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidRegistrationStatusException
     */
    invalidRegistrationStatusException?: any;
    /**
     * InvalidTagFilterException
     */
    invalidTagFilterException?: any;
    /**
     * Success
     */
    listOnPremisesInstancesOutput?: shared.ListOnPremisesInstancesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
