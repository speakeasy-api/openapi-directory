import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRestartAppServerActionEnum {
    RestartAppServer = "RestartAppServer"
}
export declare enum GETRestartAppServerVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETRestartAppServerRequest extends SpeakeasyBase {
    action: GETRestartAppServerActionEnum;
    /**
     * <p>The ID of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
     */
    environmentId?: string;
    /**
     * <p>The name of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
     */
    environmentName?: string;
    version: GETRestartAppServerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRestartAppServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
