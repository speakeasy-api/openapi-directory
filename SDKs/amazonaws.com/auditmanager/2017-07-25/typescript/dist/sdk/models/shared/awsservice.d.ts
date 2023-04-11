import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p> An Amazon Web Service such as Amazon S3 or CloudTrail. </p> <p>For an example of how to find an Amazon Web Service name and how to define it in your assessment scope, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_2">Finding an Amazon Web Service name to use in your assessment scope</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_3">Defining an Amazon Web Service name in your assessment scope</a> </p> </li> </ul>
 */
export declare class AWSService extends SpeakeasyBase {
    serviceName?: string;
}
