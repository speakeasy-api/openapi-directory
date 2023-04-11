import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteBlueGreenDeploymentActionEnum {
    DeleteBlueGreenDeployment = "DeleteBlueGreenDeployment"
}
export declare enum GETDeleteBlueGreenDeploymentVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETDeleteBlueGreenDeploymentRequest extends SpeakeasyBase {
    action: GETDeleteBlueGreenDeploymentActionEnum;
    /**
     * <p>The blue/green deployment identifier of the deployment to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints: </p> <ul> <li> <p>Must match an existing blue/green deployment identifier.</p> </li> </ul>
     */
    blueGreenDeploymentIdentifier: string;
    /**
     * A value that indicates whether to delete the resources in the green environment. You can't specify this option if the blue/green deployment <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_BlueGreenDeployment.html">status</a> is <code>SWITCHOVER_COMPLETED</code>.
     */
    deleteTarget?: boolean;
    version: GETDeleteBlueGreenDeploymentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteBlueGreenDeploymentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
