import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETEnableLoggingActionEnum {
    EnableLogging = "EnableLogging"
}
/**
 * The log destination type. An enum with possible values of <code>s3</code> and <code>cloudwatch</code>.
 */
export declare enum GETEnableLoggingLogDestinationTypeEnum {
    S3 = "s3",
    Cloudwatch = "cloudwatch"
}
export declare enum GETEnableLoggingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETEnableLoggingRequest extends SpeakeasyBase {
    action: GETEnableLoggingActionEnum;
    /**
     * <p>The name of an existing S3 bucket where the log files are to be stored.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the same region as the cluster</p> </li> <li> <p>The cluster must have read bucket and put object permissions</p> </li> </ul>
     */
    bucketName?: string;
    /**
     * <p>The identifier of the cluster on which logging is to be started.</p> <p>Example: <code>examplecluster</code> </p>
     */
    clusterIdentifier: string;
    /**
     * The log destination type. An enum with possible values of <code>s3</code> and <code>cloudwatch</code>.
     */
    logDestinationType?: GETEnableLoggingLogDestinationTypeEnum;
    /**
     * The collection of exported log types. Possible values are <code>connectionlog</code>, <code>useractivitylog</code>, and <code>userlog</code>.
     */
    logExports?: string[];
    /**
     * <p>The prefix applied to the log file names.</p> <p>Constraints:</p> <ul> <li> <p>Cannot exceed 512 characters</p> </li> <li> <p>Cannot contain spaces( ), double quotes ("), single quotes ('), a backslash (\), or control characters. The hexadecimal codes for invalid characters are: </p> <ul> <li> <p>x00 to x20</p> </li> <li> <p>x22</p> </li> <li> <p>x27</p> </li> <li> <p>x5c</p> </li> <li> <p>x7f or larger</p> </li> </ul> </li> </ul>
     */
    s3KeyPrefix?: string;
    version: GETEnableLoggingVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETEnableLoggingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
